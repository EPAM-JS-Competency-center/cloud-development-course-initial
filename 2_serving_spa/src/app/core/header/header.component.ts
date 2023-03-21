import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalInCart$!: Observable<number>;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.totalInCart$ = this.cartService.totalInCart$;
  }
}
