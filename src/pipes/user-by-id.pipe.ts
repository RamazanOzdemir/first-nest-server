import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { z } from 'zod';

const usersTable = [{ id: 123, name: 'efe', age: '23' }];

@Injectable()
export class UserByIdPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      console.log(value);
      z.number().parse(Number(value));
      return usersTable.find((user) => user.id == value);
      // connect db and find user that has id searched
    } catch {
      throw new BadRequestException('Validation was failed');
    }
  }
}
