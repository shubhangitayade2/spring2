import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';
//import { paymentService } from '../services/payment.service';
import { PaymentService } from '../services/payment.service';
import { Payment } from '../models/payment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _payment: PaymentService) { }

  payments: Array<Payment> = new Array<Payment>();
  ngOnInit(): void {

    this._payment. getPayment().subscribe((res: Payment[]) => this.payments = res, (err: any) => console.log(err))
  }

}
