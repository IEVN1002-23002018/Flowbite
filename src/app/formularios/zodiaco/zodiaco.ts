import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.html',

})
export class Zodiaco {
  nom:string=''
  ap:string=''
  am:string=''
  dia:number=0
  mes:number=0
  anio:number=0

  sexo: string = ''

  edad: number = 0
  mostrar: boolean = false

  signo: any = {};

  signos = [
    {
      nombre: 'Rata',
      imagen: 'https://i.pinimg.com/originals/d6/f3/c6/d6f3c66ce2a6c4ff215655cd36791f03.jpg'
    },
    {
      nombre: 'Buey',
      imagen: 'https://i.pinimg.com/736x/5e/b8/77/5eb87747584e7d21776e869fbe6e3d9f.jpg'
    },
    {
      nombre: 'Tigre',
      imagen: 'https://i.pinimg.com/736x/7c/93/03/7c9303769bca6ac086db2590a2aafe87.jpg'
    },
    {
      nombre: 'Conejo',
      imagen: 'https://assets.wemystic.com/wmcom/2018/10/horoscopo-chino-conejo.jpg'
    },
    {
      nombre: 'Dragón',
      imagen: 'https://i.pinimg.com/736x/37/b0/88/37b088ad50fc184459a5e60d73d55b98.jpg'
    },
    {
      nombre: 'Serpiente',
      imagen: 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg'
    },
    {
      nombre: 'Caballo',
      imagen: 'https://assets.wemystic.com/wmcom/2018/10/horoscopo-chino-caballo.jpg'
    },
    {
      nombre: 'Cabra',
      imagen: 'https://assets.wemystic.com/wmcom/2018/10/horoscopo-chino-cabra.jpg'
    },
    {
      nombre: 'Mono',
      imagen: 'https://www.lasestrellas.tv/_next/image?url=https:%2F%2Fst1.uvnimg.com%2F0f%2F92%2F6baf7426720d8aead931424b017c%2Fmono.jpg&w=1280&q=75'
    },
    {
      nombre: 'Gallo',
      imagen: 'https://assets.wemystic.com/wmcom/2018/10/horoscopo-chino-gallo.jpg'
    },
    {
      nombre: 'Perro',
      imagen: 'https://www.bajanews.mx/uploads/images/posts/38559269658370e54cce2.jpg'
    },
    {
      nombre: 'Cerdo',
      imagen: 'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg'
    }
  ];

  imprimir(): void {

    
    let actualF = new Date();

    this.edad = actualF.getFullYear() - this.anio;

    if (
      actualF.getMonth() + 1 < this.mes ||
      (
        actualF.getMonth() + 1 == this.mes && actualF.getDate() < this.dia
      )

    )

    {
      this.edad = this.edad - 1;
    }

    
    let posicion = (this.anio - 4) % 12;

    this.signo = this.signos[posicion];

    this.mostrar = true;
  }

}



