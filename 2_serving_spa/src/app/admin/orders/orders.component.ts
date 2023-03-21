import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Observable } from 'rxjs';
import { Order } from './order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  readonly columns = ['from', 'count', 'address', 'status', 'action'];

  orders$!: Observable<Order[]>;

  constructor(private readonly ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders();
  }
}
