import { Injectable } from '@nestjs/common';
import { register } from 'prom-client';
import { Counter } from 'prom-client';

const helloCounter = new Counter({
  name: 'hello_total_request',
  help: 'The total number of reqs to hello endpoint'
})

@Injectable()
export class AppService {
  getHello(): string {
    helloCounter.inc();
    return 'Hello World!';
  }

  async getMetrics(): Promise<string> {
    return await register.metrics();
  }
}
