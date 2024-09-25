import { Component , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMini: boolean = false;

  constructor(public router: Router,private sidenavService: SidenavService) {
    this.sidenavService.sidenavToggle$.subscribe(() => {
      this.sidenav.toggle();
    });
  }
  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleSidebar() {
    this.isMini = !this.isMini;
    console.log("iSMini= " + this.isMini);
    this.sidenav.toggle();
  }
}