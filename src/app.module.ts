import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModule } from './controllers/bill/bill.module';
import { CategoryModule } from './controllers/category/category.module';
import { EmployeeModule } from './controllers/employee/employee.module';
import { NoticeboardModule } from './controllers/noticeboard/noticeboard.module';
import { PaymentsModule } from './controllers/payments/payments.module';
import { PaymentTypeModule } from './controllers/payment_type/payment_type.module';
import { PurchaseModule } from './controllers/purchase/purchase.module';
import { RoleModule } from './controllers/role/role.module';
import { SupplierModule } from './controllers/suppliers/suppliers.module';
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
    TaxesModule,
    SupplierModule,
    PaymentTypeModule,
    PaymentsModule,
    NoticeboardModule,
    PurchaseModule,
    CategoryModule,
    BillModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
