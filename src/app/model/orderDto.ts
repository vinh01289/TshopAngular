import { orderDetailDto } from "./orderDetailDto";

export interface orderDto{
    Code: string;
    ShopName: string;
    orderDetails: orderDetailDto[];
  }