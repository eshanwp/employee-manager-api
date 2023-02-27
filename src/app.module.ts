import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './modules/employee/employee.module';

console.log(process.env.TYPEORM_PORT)
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      logging: false,
      migrationsRun: true,
      migrations: ['dist/migrations/!**/!*{.ts,.js}'],
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
