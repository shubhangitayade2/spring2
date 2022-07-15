import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
//import { Component, OnInit } from '@angular/core';
//import { Product } from '../models/Product';
//import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';
//import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  public productt : any;
  searchKey:string="";
  public searchTerm : string='';

      constructor(private _productservice: ProductService,  private cartservice: CartService ,private _router:Router) { }
  
     // products: Array<Product> = new Array<Product>();
      ngOnInit(): void {
    
        this._productservice.getProducts().subscribe(res =>{ this.productt = res;
                 this.productt.forEach((a:any)=>{
            Object.assign(a,{quantity:1});
          });
      })
  
  
  this.cartservice.search.subscribe((val:any)=>{
    this.searchKey=val;
  })
  
  
  
    }
        addtocart(productt: any) {
          this.cartservice.addtoCart(productt);
            
        }
    
        search(event:any){
          this.searchTerm = (event.target as HTMLInputElement).value;
          console.log(this.searchTerm);
          this.cartservice.search.next(this.searchTerm);
        
        }
        goto(){
          this._router.navigate(['/payment']);
        }
       
  
  }