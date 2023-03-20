import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events/events.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EventsFormComponent } from './events-form/events-form.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  public events:any = [];

  constructor(private _events:EventsService,public dialog: MatDialog){}  
  ngOnInit(){
   this._events.getEvents()
   .subscribe(data => this.events = data);
   console.log(`events ${this.events}`);   
 }
 openDialog(e:any): void {
  const dialogRef = this.dialog.open(EventsFormComponent, {
    data: {e},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.events.push(result.value.userData);
    console.log('The dialog was closed',this.events);
  });
}
 edit(e:any){
  this.openDialog(e)  
 }
}
