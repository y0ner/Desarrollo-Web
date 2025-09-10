import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderYi } from './components/layout/header-yi/header-yi';
import { FooterYi } from './components/layout/footer-yi/footer-yi';
import { AsideYi } from './components/layout/aside-yi/aside-yi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderYi, FooterYi, AsideYi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}