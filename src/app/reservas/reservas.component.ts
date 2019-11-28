import { Component, OnInit } from '@angular/core';
import { Hotels, TipoDeHabitacion } from 'src/models/hotels';
import { ServiciosService } from '../services/servicios.service';
import { formatDate } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Integrantes, Itinerario } from 'src/models/orden';
import { ServicioService } from '../servicio.service';



@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  constructor(private serv: ServiciosService, private localeService: BsLocaleService, private s: ServicioService) { }

  hactual: Hotels;
  hs: Hotels[];
  habs: TipoDeHabitacion[];
  habs2: TipoDeHabitacion[];
  hoy = new Date();
  habsescogidas: TipoDeHabitacion[];
  hoys = '';
  colorTheme = 'theme-default';
  itinerario: Itinerario;
  bsConfig: Partial<BsDatepickerConfig>;
  daterangepickerModel: Date[];
  locale = 'es-us';
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  cantPersonas = 0;
  cantidad: Integrantes[] = [];
  nombre: string;


  ngOnInit() {
    
    this.hactual = this.serv.getHotel();
    console.log(this.hactual);
    this.hoys = formatDate(this.hoy, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0430');
    console.log(this.hoys);
    this.s.getHotels().subscribe(
      items => {
        console.log(items);
        this.hs = items;
        console.log(this.hs);
      }
    );
    this.s.getTDH().subscribe(
      items => {
        console.log(items);
        this.habs = items.filter(hab =>  hab.hotel === this.hactual.nombre);
        this.habs2 = this.habs;
        console.log(this.habs);
      }
    );
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
}

  onChange() {
    console.log(this.cantPersonas);
    this.cantidad.length = this.cantPersonas;
  }

  onSubmit() {
    this.itinerario.fecha = this.daterangepickerModel;
    this.itinerario.costoTotal = this.getPrice();
    this.itinerario.tipoHabitacion = this.habs;
    this.itinerario.integrantes = this.cantidad;
    if (localStorage.getItem('itinerario1') === null) {

      localStorage.setItem('itinerario1', JSON.stringify(this.itinerario));

    } else if (localStorage.getItem('itinerario2') === null) {

      // tslint:disable-next-line: max-line-length
      if ((this.itinerario.fecha[0] > JSON.parse( localStorage.getItem('itinerario1')[1]) ) || ( this.itinerario.fecha[1] < JSON.parse( localStorage.getItem('itinerario1')[0])) ){

        localStorage.setItem('itinerario2', JSON.stringify(this.itinerario));
      } else {
        alert('Usted ya ha reservado en esta fecha.');
      }
    } else if (localStorage.getItem('itinerario3') === null) {
      // tslint:disable-next-line: max-line-length
      if (((this.itinerario.fecha[0] > JSON.parse( localStorage.getItem('itinerario1')[1]) ) || ( this.itinerario.fecha[1] < JSON.parse( localStorage.getItem('itinerario1')[0]))
            // tslint:disable-next-line: max-line-length
            && (this.itinerario.fecha[0] > JSON.parse( localStorage.getItem('itinerario2')[1]) ) || ( this.itinerario.fecha[1] < JSON.parse( localStorage.getItem('itinerario2')[0])))) {

        localStorage.setItem('itinerario2', JSON.stringify(this.itinerario));
      } else {
        alert('Usted ya ha reservado en esta fecha.');
      }
    } else if (localStorage.getItem('itinerario4') === null) {
      localStorage.setItem('itinerario4', JSON.stringify(this.itinerario));
    } else if (localStorage.getItem('itinerario5') === null) {
      localStorage.setItem('itinerario5', JSON.stringify(this.itinerario));
    }


  }

  getPrice() {
    let x = 0;
    for (const entry of this.habsescogidas) {
      x = x + entry.precio; // 1, "string", false
  }
    return x;
  }


}