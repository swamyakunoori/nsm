import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatchModule } from './batch/batch.module';
import { BillModule } from './bill/bill.module';
import { CategoryModule } from './category/category.module';
import { CustomersModule } from './customers/customers.module';
import { DoctorsModule } from './doctors/doctors.module';
import { EmployeeModule } from './employee/employee.module';
import { ExpenseTypeModule } from './expense-type/expense-type.module';
import { ExpensesModule } from './expenses/expenses.module';
import { MedicinesModule } from './medicines/medicines.module';
import { NoticeboardModule } from './noticeboard/noticeboard.module';
import { PaymentTypeModule } from './payment-type/payment-type.module';
import { PaymentsModule } from './payments/payments.module';
import { PurchaseModule } from './purchase/purchase.module';
import { RoleModule } from './role/role.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { TaxesModule } from './taxes/taxes.module';

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
    PaymentTypeModule,
    PaymentsModule,
    NoticeboardModule,
    PurchaseModule,
    CategoryModule,
    BillModule,
    ExpenseTypeModule,
    ExpensesModule,
    DoctorsModule,
    CustomersModule,
    BatchModule,
    MedicinesModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
