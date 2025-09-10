import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, AvatarModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
