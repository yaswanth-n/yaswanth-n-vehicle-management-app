import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service'; 
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMini: boolean = false;
  constructor(private sidenavService: SidenavService, appComponent:AppComponent) {}

  toggleSidebar() {
    console.log("SidebarComponent .." + this.isMini);
    this.isMini = !this.isMini;
    this.sidenavService.toggleSidenav();
  }
}
