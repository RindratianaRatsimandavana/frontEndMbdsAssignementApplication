import { Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogModule,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogModule,MatCardModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    console.log("data.typeDonnee",this.data.typeDonnee)
    console.log(".data.id",this.data.id)
  }
  
}
