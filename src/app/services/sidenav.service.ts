import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav: MatSidenav | undefined;
  private sidenavToggleSource = new Subject<void>();
  sidenavToggle$ = this.sidenavToggleSource.asObservable();
  
  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  // setSidenav(sidenav: MatSidenav) {
  //   this.sidenav = sidenav;
  // }

  // toggleSidenav() {
  //   if (this.sidenav) {
  //     this.sidenav.toggle();
  //   }
  // }

  // closeSidenav() {
  //   if (this.sidenav) {
  //     this.sidenav.close();
  //   }
  // }

  // openSidenav() {
  //   if (this.sidenav) {
  //     this.sidenav.open();
  //   }
  // }
  // // setSidenav(sidenav: MatSidenav) {
  // //   this.sidenav = sidenav;
  // // }

  // // toggleSidenav() {
  // //   console.log("hellow 3");
  // //   if (this.sidenav) {
  // //     this.sidenav.toggle();
  // //   }
  // // }

  // // toggleSidenav() {
  // //   console.log("hellow 4 ");
  // //   this.sidenavToggleSource.next();
  // // }
}