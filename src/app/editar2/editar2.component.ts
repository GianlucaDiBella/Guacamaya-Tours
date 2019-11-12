import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/models/destino';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-editar2',
  templateUrl: './editar2.component.html',
  styleUrls: ['./editar2.component.scss']
})
export class Editar2Component implements OnInit {

  constructor(private s: ServicioService) { }

  editDesti: boolean = false;
  destinos: Destinos[];
  destinoEditado: Destinos;
  destino = {
    nombre:  '',
    descripcion: '',
    info: '',
    tipoDeDestino: '',
    servicios: '',
    imagen: '',
    actividades: '',
    latitud: '',
    longitud: '',
    estado: '',
    direccion: '',
    linkGoogleMaps: '',
    available: true,
  };


  ngOnInit() {
    this.s.getDestinos().subscribe(
      items => {
        this.destinos=items;
        console.log(this.destinos);
      }
    );
    console.log(this.destinos);
  }

  onSubmit(){
    if(this.destino.nombre != '' && this.destino.info != ''){

      this.s.addEstado(this.destino);
      this.destino.nombre = '';
      this.destino.descripcion = '',
      this.destino.info= '',
      this.destino.tipoDeDestino= '',
      this.destino.servicios= '',
      this.destino.imagen= '',
      this.destino.actividades= '',
      this.destino.latitud= '',
      this.destino.longitud= '',
      this.destino.estado= '',
      this.destino.direccion= '',
      this.destino.linkGoogleMaps= '',
      this.destino.available= true

    }
  }
  
  disp(){
    this.destino.available=true;
  }
  disp1(){
    this.destino.available=false;
  }
  disp2(){
    this.destinoEditado.available=true;
  }
  disp3(){
    this.destinoEditado.available=false;
  }

  deleteDestino(event, es: Destinos){
    this.clearState();
    this.s.deleteDestino(es);
  }

  editDestino(event, es: Destinos){
    this.editDesti = true;
    this.destinoEditado = es;
  }

  updateDestino(es: Destinos){
    this.s.updateDestino(es);
    this.clearState();
  }

  clearState(){
    this.editDesti = false;
    this.destinoEditado = null;
  }

}
