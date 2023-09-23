import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  Post,
  Redirect,
  Req,
  Res,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  DefaultValuePipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import { UserByIdPipe } from 'src/pipes/user-by-id.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // request payload (Body)
  @Post()
  //body validation pipe is applied to this controller with the UsePipes decorator
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async create(@Body() requestBody: CreateCatDto) {
    this.catsService.create(requestBody);
    return requestBody;
  }

  // changed status code
  @Get('status')
  @HttpCode(204)
  path(@Req() req: Request): string {
    console.log({ req });

    return 'This action request test';
  }

  //redirected
  @Get('redirect')
  @Redirect('https://google.com', 301)
  redirect(@Query('version') version) {
    // if the action returns any thing , the redirect decorator is overridden
    if (version == 5) {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // basic express response object
  @Get('express')
  express(@Res() response: Response) {
    return response
      .status(HttpStatus.OK)
      .send('This action returns by express response');
  }

  //custom response code with nest pipe
  @Get('pipe/:id')
  pipe(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Pipe id is ${id}`;
  }

  @Get('users')
  // Providing defaults. Returns default value if query parameter does not exist
  users(@Query('id', new DefaultValuePipe(123), new UserByIdPipe()) user) {
    return user;
  }
  @Get('users/:id')
  // transform pipe, takes a parameter and returns entity
  findUserById(@Param('id', new UserByIdPipe()) user) {
    return user;
  }

  // handling route params
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `This action returns a #${id} cat`;
  }
}
