import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

