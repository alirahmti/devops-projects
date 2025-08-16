FROM golang:1.20 as builder
WORKDIR /app
COPY go.mod .
RUN go mod download
COPY . .
RUN go build -o backend .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/backend .
EXPOSE 8080
CMD ["./backend"]
