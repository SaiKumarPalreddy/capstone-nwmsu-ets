import { Component,Inject, OnInit } from '@angular/core';
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
  eventForm:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.eventForm = new FormGroup({
          'eventName':new FormControl(null,[Validators.required]),
          'eventDescription':new FormControl(null,[Validators.required]),
          'date':new FormControl(null,[Validators.required]),
          'location':new FormControl(null,[Validators.required]),
          'createdBy':new FormControl(null,[Validators.required]),
      }); 
  }
  ngOnInit(){
     this.editData();
  }
  editData(){
    console.log("form info",this.eventForm.controls)
  this.eventForm.controls['eventName'].setValue(this.data.e.eventName);
  this.eventForm.controls['eventDescription'].setValue(this.data.e.eventDescription);
  this.eventForm.controls['date'].setValue(this.data.e.date);
  this.eventForm.controls['location'].setValue(this.data.e.location);
  this.eventForm.controls['createdBy'].setValue(this.data.e.createdBy);

  }

  onNoClick(): void {
    this.dialogRef.close(this.eventForm);
  }

 
}
