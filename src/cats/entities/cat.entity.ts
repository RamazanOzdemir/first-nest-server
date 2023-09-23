import { CreateCatDto } from '../dto/create-cat.dto';

export class Cat implements CreateCatDto {
  name: string;
  age: number;
}
