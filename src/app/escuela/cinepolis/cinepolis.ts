
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ICompra } from '../compra';

@Component({
  selector: 'app-cinepolis',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html'
})

export class Cinepolis implements OnInit {

  formulario!: FormGroup;

  nuevaCompra: ICompra = {
    nombre: '',
    compradores: '',
    tarjeta: 'no',
    boletos: '',
    subtotal: '',
    descuento: '',
    total: ''
  };

  resultado: boolean = false;
  nota: string='';

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjeta: new FormControl('no'),
      boletos: new FormControl('')
    });

  }

  procesar(): void {

    let nombre: string = this.formulario.value.nombre;
    let compradores: number = Number(this.formulario.value.compradores);
    let tarjeta: string = this.formulario.value.tarjeta;
    let boletos: number = Number(this.formulario.value.boletos);

    if (nombre == '' || compradores <= 0 || boletos <= 0) {
      this.resultado = true;
      return;
    }

    if (boletos > compradores * 7) {
      this.nota = 'Solo se puede comprar 7 boletos por persona :(';
      this.resultado = false;
      return;
    }

    let subtotal: number = boletos * 12;
    let descuento: number = 0;

    if (boletos > 5) {
      descuento = subtotal * 0.15;
    } else if (boletos >= 3) {
      descuento = subtotal * 0.10;
    }

    let total: number = subtotal - descuento;

    if (tarjeta == 'si') {
      total = total - (total * 0.10);
    }

    this.nuevaCompra = {
      nombre: nombre,
      compradores: this.formulario.value.compradores,
      tarjeta: tarjeta,
      boletos: this.formulario.value.boletos,
      subtotal: String(subtotal),
      descuento: String(subtotal + total),
      total: String(total)
      
    };

    this.resultado = true;

  }

  salir(): void {

    this.formulario.reset({
      nombre: '',
      compradores: '',
      tarjeta: 'no',
      boletos: ''
    });

   

    this.nota = '';
    this.resultado = false;

  }

}