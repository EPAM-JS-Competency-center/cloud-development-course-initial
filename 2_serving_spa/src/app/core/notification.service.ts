import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  /**
   * Show message with an error
   *
   * @param text Error text message
   * @param duration Duration to close after. 0 to close manually only
   */
  showError(text: string, duration = 3000) {
    this.snackBar.open(text, 'Dismiss', {
      duration,
      panelClass: 'shop-snackbar-error',
    });
  }
}
