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
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  // request payload (Body)
  @Post()
  create(@Body() requestBody) {
    return { requestBody };
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
    console.log('warum', version);
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

  // handling route params
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
