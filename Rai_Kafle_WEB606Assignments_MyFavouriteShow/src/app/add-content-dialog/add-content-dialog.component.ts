import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
})
export class AddContentDialogComponent {
  title: string = '';
  // Your other properties for creating new content

  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}