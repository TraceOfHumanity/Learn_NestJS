import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

dotenv.config(); // Завантажуємо змінні середовища з .env

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(process.env.MONGODB_URI), // Використовуємо змінну середовища
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
