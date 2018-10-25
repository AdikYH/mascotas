import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {RazaService} from '../../services/raza.service';


import { Select2OptionData } from 'ng2-select2';
import {Sort} from '@angular/material';


export interface Mascota {
  nombre: string;
  fecha_nacimiento: date;
  especie: string;
  raza: string;
  vacunas: [];
}

@Component({
  selector: 'app-pet-registration',
  templateUrl: './pet-registration.component.html',
  styleUrls: ['./pet-registration.component.css']
})
export class PetRegistrationComponent implements OnInit {

  especies: any[] = [{nombre: 'perro', valor: 'perro'}, {nombre: 'gato', valor: 'gato'}, {nombre: 'otra especie', valor: 'otro'}];
  // aux: string = 'AUX';

  vacunas = new FormControl();
  vacunasList: string[] = ['Vacuna 1', 'Vacuna 2', 'Vacuna 3', 'Vacuna 4'];

  especiePerroList: any[] = [];
  especieGatoList: any[] = [];
  especieOtrosList: any[] = [];

  mascota: any = {
    nombre: '',
    fecha_nacimiento: new Date(),
    especie: '',
    raza: '',
    vacunas: []
  };

  mascotasList: any = [];

  mascotas: Mascota[] = [];

  sortedData: Mascota[];

  constructor( private _razaService: RazaService, private _formBuilder: FormBuilder) {
    console.log(JSON.parse(localStorage.getItem("mascotasList")))
    if(JSON.parse(localStorage.getItem("mascotasList")) == null) this.sortedData = [];
    else this.sortedData = JSON.parse(localStorage.getItem("mascotasList")).slice() || [];//this.mascotas.slice();
    // this.sortedData = this.desserts.slice();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fivethFormGroup = this._formBuilder.group({
      fivethCtrl: ['', Validators.required]
    });

    this.especiePerroList = this._razaService.getRazaPerros();
    this.especieGatoList = this._razaService.getRazaGatos();
    this.especieOtrosList = this._razaService.getRazaOtros();
    this.mascotasList = JSON.parse(localStorage.getItem("mascotasList")) || [];

  }

  agregarMascota() {

    this.mascotasList = JSON.parse(localStorage.getItem("mascotasList")) || [];
    this.mascotasList.push(this.mascota);

    localStorage.setItem("mascotasList", JSON.stringify(this.mascotasList));
    this.sortedData = JSON.parse(localStorage.getItem("mascotasList")).slice() || [];

  }

  sortData(sort: Sort) {
    const data = JSON.parse(localStorage.getItem("mascotasList")).slice()  || [];//this.mascotas.slice();
    console.log(data);
    console.log(sort);

    // const data = this.desserts.slice();
    if (!sort.active || sort.nombre === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {

        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'fecha_nacimiento': return compare(a.fecha_nacimiento, b.fecha_nacimiento, isAsc);
        case 'especie': return compare(a.especie, b.especie, isAsc);
        case 'raza': return compare(a.raza, b.raza, isAsc);
        default: return 0;
      }
    });
  }

  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
