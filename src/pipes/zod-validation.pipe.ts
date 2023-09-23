import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  HttpStatus,
  HttpExceptionBodyMessage,
} from '@nestjs/common';
import { ZodObject } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}
  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // validate value with Zod
      this.schema.parse(value);
    } catch (error) {
      // Throw the exception if the value does not pass validation
      throw new BadRequestException({
        message: 'Validation was failed',
        error,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    return value;
  }
}
