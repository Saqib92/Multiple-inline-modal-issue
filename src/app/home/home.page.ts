import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  isOPen: boolean = false;
  isSecond: boolean = false;

  constructor(
    public routerOutlet: IonRouterOutlet,
    public modalCtrl: ModalController
  ) { }

  openModal() {
    this.isOPen = !this.isOPen;
  }

  openSecondModal(){
    this.isSecond = !this.isSecond;
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'Search Flight',
      canBackwardsSelected: false,
      format: 'moment',
      //pickMode: this.tripType == 'oneway' ? 'single' : 'range'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: any = event.data;
    console.log(date);
    
  }

}
