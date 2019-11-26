import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-h',
  templateUrl: './editar-h.component.html',
  styleUrls: ['./editar-h.component.scss']
})
export class EditarHComponent implements OnInit {

  private sus : Subscription;

  constructor(private s: ServicioService) {
    this.s.getHotels().subscribe(
      items=> {
        this.hoteles=items;
        console.log(this.hoteles);
      }
    )
  }

  editHotel: boolean = false;
  addHotel: boolean = false;
  hoteles: Hotels[];
  estados: Estado[];
  hotelEditado: Hotels;
  hotel = {
    nombre: '',
    estado:'',
    fotos: '',
    estrellas: 0,
    info:'',
    latitud:'',
    direccion:'',
    longitud:'',
    servicios: '',
    available: true,
    gugulmaps:'',
  }

  ngOnInit() {
    this.s.getEstado().subscribe(
      items=> {
        this.estados = items;
        console.log(this.estados);
      }
    )

    this.s.getHotels().subscribe(
      items=> {
        this.hoteles=items;
        console.log(this.hoteles);
      }
    )

  };

  onSubmit(){

    this.s.addHotel(this.hotel)
    this.hotel.nombre='';
    this.hotel.estado='';
    this.hotel.fotos='';
    this.hotel.estrellas=0;
    this.hotel.info='';
    this.hotel.servicios='';
    this.hotel.latitud='',
    this.hotel.direccion='';
    this.hotel.longitud='',
    this.hotel.available=true,
    this.hotel.gugulmaps='';


  }

  disp(){
    this.hotel.available=true;
  }
  disp1(){
    this.hotel.available=false;
  }
  disp2(){
    this.hotelEditado.available=true;
  }
  disp3(){
    this.hotelEditado.available=false;
  }
  
  deleteHotel(event, es: Hotels){
    this.clearState();
    this.s.deleteHotel(es);
  }

  editarHotel(event, es: Hotels){
    this.editHotel = true;
    this.hotelEditado = es;
  }

  updateHotel(es: Hotels){
    this.s.updateHotel(es);
    this.clearState();
  }

  clearState(){
    this.editHotel = false;
    this.hotelEditado = null;
  }

  addiHotel(){
    this.addHotel = true;
  }
  cerrar(){
    this.addHotel = false;
  }

}
