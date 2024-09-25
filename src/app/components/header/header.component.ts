import { Component, Input } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service'; 
import { AppComponent } from '../../app.component'; // Import AppComponent to use its method


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  constructor(private appComponent: AppComponent) {}

  toggleSidebar() {
    this.appComponent.toggleSidebar(); // Call the toggleSidebar method of AppComponent
    
  }

}
