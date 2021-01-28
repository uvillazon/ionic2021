import { Component, OnInit  ,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity',
  templateUrl: './infinity.page.html',
  styleUrls: ['./infinity.page.scss'],
})
export class InfinityPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data:any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // event.target.complete();
      const nuevodato:any[] = Array(20);
      this.data.push(...nuevodato);
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 100) {
        event.target.disabled = true;
      }
    }, 2000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
 


}
