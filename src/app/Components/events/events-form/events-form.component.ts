import { Component,Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Ievents } from 'src/app/shared/events/events';
import { EventsComponent } from '../events.component';
// import { DialogData } from '../form-model';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit{
  @Input() min: any;
  yesterday = new Date();
  eventForm:FormGroup;
  disabled = true;
  name:any;
  constructor(
    public dialogRef: MatDialogRef<EventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.eventForm = new FormGroup({
          'eventName':new FormControl(null,[Validators.required]),
          'eventDescription':new FormControl(null,[Validators.required]),
          'eventType':new FormControl(null,[Validators.required]),
          'eventSwipeType': new FormControl(),
          'fromDate':new FormControl(),
          'toDate':new FormControl(),
          'eventTime': new FormControl(null,Validators.pattern('^[0-9]')),
          'eventLocation':new FormControl(null,[Validators.required]),
          'createdBy':new FormControl({value:this.name, disabled : true},[Validators.required]),
      }); 
      this.yesterday.setDate(this.yesterday.getDate() - 0);
       
  }
  ngOnInit(){
    //  this.editData();
     this.name = localStorage.getItem('userName');
  }
  // editData(){
    
  // this.eventForm.controls['eventName'].setValue(this.data.e.eventName);
  // this.eventForm.controls['eventDescription'].setValue(this.data.e.eventDescription);
  // this.eventForm.controls['eventType'].setValue(this.data.e.eventType);
  // this.eventForm.controls['eventSwipeType'].setValue(this.data.e.eventSwipeType);
  // this.eventForm.controls['fromDate'].setValue(this.data.e.fromDate);
  // this.eventForm.controls['toDate'].setValue(this.data.e.toDate);
  // this.eventForm.controls['eventLocation'].setValue(this.data.e.eventLocation);
  // this.eventForm.controls['createdBy'].setValue(this.data.e.createdBy);

  // console.log("form info",this.eventForm.controls);
  // }

  onNoClick(): void {
    this.dialogRef.close(this.eventForm);
  }
  onReset() {
    this.eventForm.reset();
}
 
}
