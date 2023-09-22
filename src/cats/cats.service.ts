import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { HelpersService } from 'src/helpers/helpers.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  // that helpers module import to cats module is not required.
  // Because helpers module is global module, it can used every module without imports
  constructor(private helpersService: HelpersService) {}

  create(cat: Cat) {
    console.log(this.helpersService.isString(cat.name));
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
