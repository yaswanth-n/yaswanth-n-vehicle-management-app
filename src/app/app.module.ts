import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ContractComponent } from './components/contract/contract.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { TrafficTicketComponent } from './components/traffic-ticket/traffic-ticket.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ServiceMaintenanceComponent } from './components/service-maintenance/service-maintenance.component';
import { TiresComponent } from './components/tires/tires.component';
import { UsersComponent } from './components/users/users.component';
import { TransactionsComponent } from './components/reports/transactions/transactions.component';
import { ExpensesComponent } from './components/reports/expenses/expenses.component';



@NgModule({
  declarations: [    
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    VehicleComponent,
    ContractComponent,
    RentalsComponent,
    TrafficTicketComponent,
    InsuranceComponent,
    ServiceMaintenanceComponent,
    TiresComponent,
    UsersComponent,
    TransactionsComponent,
    ExpensesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
