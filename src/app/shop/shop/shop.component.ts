import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderDto } from 'src/app/model/orderDto';
import { UserProfile } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { shopService } from 'src/app/services/shopservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  user: UserProfile = null;
  lsOrder:orderDto[]=[];

  constructor(private auth: AuthService, private router: Router, private shopservice: shopService) { }

  ngOnInit(): void {
    let item = JSON.parse(localStorage.getItem("CURRENTUSER"));
    console.log("item---", item);
    this.getAllList();
  }

  listAll : any;
  getAllList(){
    this.shopservice.getList().subscribe(res=>{
      this.listAll = res;
      console.log("listAll", this.listAll);
    })
  }
  getIdShop(idShop: string){
    console.log(idShop);
    this.shopservice.getListOrder(idShop).subscribe(res=>{
      console.log(res);
        this.lsOrder = res;
    });
  }

}
