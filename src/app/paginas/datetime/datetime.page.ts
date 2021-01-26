import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  customoptions:any;
  customPickerOptions: any;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  constructor() { 

    this.customoptions={
      buttons: [{
        text: 'Guardar',
        handler: (evento) => console.log('Clicked Save!')
      }, {
        text: 'Cancelars',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }

    this.customPickerOptions={
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          // return false;
        }
      }]
    }
  }

  ngOnInit() {
  }

  cambioFecha (event){
      console.log(event);
  }
}
