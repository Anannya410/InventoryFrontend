import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateDeviceComponent } from './components/create-device/create-device.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-device', component: CreateDeviceComponent}
];
