import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './controllers/employee/employee.module';
import { RoleModule } from './controllers/role/role.module';
import { TaxesModule } from './controllers/taxes/taxes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nsm_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RoleModule,
    EmployeeModule,
    TaxesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
