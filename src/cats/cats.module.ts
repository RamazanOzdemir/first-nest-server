import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

// helpers module was not imported but it was used in the catsService
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
