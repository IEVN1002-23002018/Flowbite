import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formularios/zodiaco/zodiaco';

@Component({
  imports: [RouterOutlet, Zodiaco],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('segundoparcialAngular');
}
