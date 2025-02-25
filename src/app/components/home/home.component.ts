import { Component, OnInit } from '@angular/core';
import { CommonModule, formatPercent } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeviceDataService } from '../../services/device.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeviceListComponent } from "../device-list/device-list.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DeviceListComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  devices: any[] = [];

  constructor(private deviceService: DeviceDataService) {}

  async ngOnInit() {
    await this.deviceService.getDevices();
    this.deviceService.devices.subscribe((data) => {
      this.devices = data;
    });
    console.log(this.devices);
  }
}
