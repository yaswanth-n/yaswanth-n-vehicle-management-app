import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TiresComponent } from './components/tires/tires.component';
import { ContractComponent } from './components/contract/contract.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { TrafficTicketComponent } from './components/traffic-ticket/traffic-ticket.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ServiceMaintenanceComponent } from './components/service-maintenance/service-maintenance.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tires', component: TiresComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: 'traffic-ticket', component: TrafficTicketComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'service-maintenance', component: ServiceMaintenanceComponent },
  { path: 'users', component: UsersComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route
  // { path: '**', redirectTo: '/login' }  // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

