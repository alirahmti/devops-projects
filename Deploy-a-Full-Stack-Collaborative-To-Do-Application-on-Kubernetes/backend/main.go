package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-redis/redis/v8"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	db  *gorm.DB
	rdb *redis.Client
	ctx = context.Background()
)

type Message struct {
	ID        uint      `gorm:"primaryKey"`
	UserID    uint
	Text      string
	CreatedAt time.Time
}

func init() {
	var err error

	dsn := os.Getenv("DB_DSN")
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}
	db.AutoMigrate(&Message{})

	rdb = redis.NewClient(&redis.Options{Addr: os.Getenv("REDIS_ADDR")})
	if _, err := rdb.Ping(ctx).Result(); err != nil {
		log.Fatalf("Failed to connect to Redis: %v", err)
	}
}

// Cleanup old messages
func cleanupOldMessages() {
	threshold := time.Now().AddDate(0, 0, -30)
	result := db.Where("created_at < ?", threshold).Delete(&Message{})
	log.Printf("Cleaned up %d old messages", result.RowsAffected)
}

// Analyze messages
func analyzeMessages() {
	var results []struct {
		UserID uint
		Count  int
	}
	db.Raw("SELECT user_id, COUNT(*) as count FROM messages GROUP BY user_id").Scan(&results)
	for _, result := range results {
		log.Printf("User %d has %d messages", result.UserID, result.Count)
	}
}

func main() {
	http.HandleFunc("/api/cleanup", func(w http.ResponseWriter, r *http.Request) {
		cleanupOldMessages()
		w.Write([]byte("Cleanup completed."))
	})

	http.HandleFunc("/api/analyze", func(w http.ResponseWriter, r *http.Request) {
		analyzeMessages()
		w.Write([]byte("Analysis completed."))
	})

	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
    

