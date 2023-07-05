import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `gerOne ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: createProductDto): string {
    return ` title ${createProductDto.title}, price ${createProductDto.price}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: updateProductDto, @Param('id') id: string) {
    return `Update ${id} \n title ${updateProductDto.title}, price ${updateProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `delete ${id}`;
  }
}
