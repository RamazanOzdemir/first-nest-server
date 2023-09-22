import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';

// Middlewares can applied either feature module or app module

// Feature Module
@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'dogs', method: RequestMethod.POST });
  }
}
