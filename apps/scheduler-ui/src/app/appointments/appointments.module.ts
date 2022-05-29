import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@scheduling-system/ui';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
  },
];

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class AppointmentsModule {}
