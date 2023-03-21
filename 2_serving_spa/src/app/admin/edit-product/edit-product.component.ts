import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { Product } from '../../products/product.interface';
import { ProductsService } from '../../products/products.service';
import { NotificationService } from '../../core/notification.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  productId: string | null = null;
  requestInProgress = false;

  loaded$ = new BehaviorSubject(false);

  private readonly onDestroy$: Subject<void> = new Subject();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fb: UntypedFormBuilder,
    private readonly notificationService: NotificationService,
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      count: ['', Validators.required],
    });
  }

  get countCtrl(): AbstractControl {
    return this.form.get('count') as AbstractControl;
  }

  get descriptionCtrl(): AbstractControl {
    return this.form.get('description') as AbstractControl;
  }

  get priceCtrl(): AbstractControl {
    return this.form.get('price') as AbstractControl;
  }

  get titleCtrl(): AbstractControl {
    return this.form.get('title') as AbstractControl;
  }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('productId');

    if (!productId) {
      this.loaded$.next(true);
      return;
    }

    this.productsService
      .getProductById(productId)
      .pipe(
        finalize(() => this.loaded$.next(true)),
        takeUntil(this.onDestroy$)
      )
      .subscribe((product) => {
        if (product) {
          this.form.patchValue(product);
          this.productId = product.id;
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  editProduct(): void {
    const product: Product = this.form.value;
    if (!product) {
      return;
    }

    const editProduct$ = this.productId
      ? this.productsService.editProduct(this.productId, product)
      : this.productsService.createNewProduct(product);

    this.requestInProgress = true;
    editProduct$.subscribe(
      () => this.router.navigate(['../'], { relativeTo: this.activatedRoute }),
      (error: unknown) => {
        console.warn(error);
        this.requestInProgress = false;
        this.notificationService.showError(
          `Failed to ${this.productId ? 'edit' : 'create'} product`
        );
      }
    );
  }
}
