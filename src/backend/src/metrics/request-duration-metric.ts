import { Histogram } from "prom-client"

export const httpRequestDurationMicroseconds = new Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['route', 'method', 'status'],
  // buckets for response time from 0.1ms to 500ms
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]
})