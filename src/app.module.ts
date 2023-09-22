import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DogsModule } from './dogs/dogs.module';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [ConfigModule.forRoot(), DogsModule, CatsModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
