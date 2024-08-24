import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { GameProfile } from '../../shared/model/game-profile';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { categories } from '../../shared/data/categories';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-dialog-word-sorter',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatSelectModule],
  templateUrl: './dialog-word-sorter.component.html', 
  styleUrls: ['./dialog-word-sorter.component.css']  
})
export class DialogWordSorterComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogWordSorterComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onPlayClick(): void {
    this.dialogRef.close(true);
  }
}  