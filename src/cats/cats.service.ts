import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { HelpersService } from 'src/helpers/helpers.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  // that helpers module import to cats module is not required.
  // Because helpers module is global module, it can used every module without imports
  constructor(private helpersService: HelpersService) {}

  create(cat: CreateCatDto) {
    console.log(this.helpersService.isString(cat.name));
    this.cats.push(cat as Cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  exception() {
    try {
      throw new Error('An error is occurred');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  customException() {}
}
