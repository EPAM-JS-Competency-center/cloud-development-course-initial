import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.interface';

@Injectable()
export class OrdersService {
  constructor() {}

  getOrders(): Observable<Order[]> {
    return of([]);
  }
}
