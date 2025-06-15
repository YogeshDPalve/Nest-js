import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePorpertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All properties';
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(typeof sort);
    return `id : ${id} `;
  }
  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body(
      new ValidationPipe({
        // whitelist: true,
        //   forbidNonWhitelisted: true,
        groups: ['create'],
        always: true,
      }),
    )
    body: CreatePorpertyDto,
  ) {
    return body;
  }
  @Patch()
  update(
    @Body(
      new ValidationPipe({
        // whitelist: true,
        // forbidNonWhitelisted: true,
        groups: ['update'],
        always: true,
      }),
    )
    body: CreatePorpertyDto,
  ) {
    return body;
  }
  @Patch(':id')
  updateById(
    @Body(
      new ValidationPipe({
        // whitelist: true,
        // forbidNonWhitelisted: true,
        groups: ['update'],
        always: true,
      }),
    )
    body: CreatePorpertyDto,
  ) {
    return body;
  }
}
