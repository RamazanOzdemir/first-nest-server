import { Global, Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';

// global module is saved in global scope therefor it can used in all modules.
@Global()
@Module({
  providers: [HelpersService],
  exports: [HelpersService],
})
export class HelpersModule {}
