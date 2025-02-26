import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateDeviceComponent } from './components/create-device/create-device.component';
import { ShelfComponent } from './components/shelf/shelf/shelf.component';
import { ShelfPositionComponent } from './components/shelfPosition/shelf-position/shelf-position.component';
import { CreateShelfComponent } from './components/shelf/create-shelf/create-shelf.component';
import { CreateShelfPositionComponent } from './components/shelfPosition/create-shelf-position/create-shelf-position.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-device', component: CreateDeviceComponent},
    {path: 'shelves', component: ShelfComponent},
    {path: 'create-shelf', component: CreateShelfComponent},
    {path: 'shelf-positions', component: ShelfPositionComponent},
    {path: 'create-shelfPosition', component: CreateShelfPositionComponent}
];
