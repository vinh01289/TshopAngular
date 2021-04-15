import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderDto } from 'src/app/model/orderDto';
import { AuthService } from 'src/app/services/auth-service.service';
import { shopService } from 'src/app/services/shopservice.service';

@Component({
  selector: 'app-shop-order',
  templateUrl: './shop-order.component.html',
  styleUrls: ['./shop-order.component.css']
})
export class ShopOrderComponent implements OnInit,OnChanges {

  
  @Input() idShop: string; 
  
  lsOrder:orderDto[]=[];// decorate the property with @Input()
  constructor(private auth: AuthService, private router: Router, private shopservice: shopService) { }

  ngOnInit(): void {
    console.log("IDsHOP IN cHILD",this.idShop),
    this.getIdShop(this.idShop);
  }
  ngOnChanges():void{
    console.log("IDsHOP IN cHILD",this.idShop),
    this.getIdShop(this.idShop);
  }

  getIdShop(idShop: string){
    this.idShop = idShop;
    console.log('idShop',this.idShop);
    this.shopservice.getListOrder(idShop).subscribe(res=>{
      console.log(res);
        this.lsOrder = res;
    });
  }
}
