import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';


@Component({
  imports: [RouterOutlet, Navbar],
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
