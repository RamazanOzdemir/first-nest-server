import { Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  // Normally uses parser pipe to check parameter type. This is just sample for helper function
  isString(value: any): boolean {
    return typeof value === 'string';
  }
}
