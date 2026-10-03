import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formularios/zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Usuario } from './formularios/usuario/usuario';

@Component({
  imports: [RouterOutlet, Navbar, Usuario],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl:'./app.css'
})

export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
