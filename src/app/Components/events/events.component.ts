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
  privateEvents:any = [];
  publicEvents:any = [];
  currentUser;
  constructor(private _events:EventsService,public dialog: MatDialog){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }  
  ngOnInit(){
   this._events.getEvents()
   .subscribe(data => {
    this.events = data ;
    // console.log("the events",this.events) ;
    this.events.forEach((e:any) => {
     if(e.eventType == 'Private'){
      this.privateEvents.push(e)
     }
     else{
     this.publicEvents.push(e)
     }
    }); 
    } );
 
   
 }
 openDialog(): void {
  const dialogRef = this.dialog.open(EventsFormComponent, {
    width: '500px',
    // data: {}
  });

  dialogRef.afterClosed().subscribe(data => {
    console.log("Result",data);
    
    // this.events.push(data.value.userData);
    console.log('The dialog was closed',this.events);
  });
}
//  edit(e:any){
//   this.openDialog(e)  
//  }



 deletePrivateEvent(index:any) {
  
  this.privateEvents.splice(index, 1);
 
}
deletePublicEvent(index:any) {
  
  this.publicEvents.splice(index, 1);
 
}
}
