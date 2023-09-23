import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// Custom Pipe, this is just sample , it validate no thing
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
