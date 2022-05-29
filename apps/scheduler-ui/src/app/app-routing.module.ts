import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then((m) => m.AppointmentsModule),
  },
  {
    path: '',
    redirectTo: 'appointments',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SchedulerAppRoutingModule {}
