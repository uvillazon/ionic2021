import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild(IonList) ionlist : IonList;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    // this.dataService.getUsuarios().subscribe(data=>{console.log(data.data)});
    this.usuarios = this.dataService.getUsuarios();
    console.log(this.usuarios);
  }

  getUsuarios(){
    // this.dataService.getUsuarios().subscribe(data=>{console.log(data)});
    this.dataService.getUsuarios().subscribe(console.log);
    return null;
  }
  favorite(usuario){
    console.log("compartir");
    console.log(usuario);
  }
  eliminar(usuario){
    console.log("eliminar");
    console.log(usuario);
  }

}
