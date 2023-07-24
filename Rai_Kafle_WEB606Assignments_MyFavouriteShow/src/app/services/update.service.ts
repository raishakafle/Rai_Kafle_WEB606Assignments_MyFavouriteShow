// update.service.ts
import { Injectable } from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        this.showUpdateSnackBar();
      });
    }
  }

  private showUpdateSnackBar() {
  
  }
}