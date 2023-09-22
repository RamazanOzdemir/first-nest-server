import { Global, Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';

// global module is saved in global scope therefor it can used in all modules.
// if the module was not Global Module, it would be called Shared Module
@Global()
@Module({
  providers: [HelpersService],
  exports: [HelpersService],
})
export class HelpersModule {}
