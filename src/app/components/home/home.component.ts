import { Component, ChangeDetectionStrategy,  signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { DeviceService } from '../../services/device.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, HeaderComponent, MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HomeComponent implements OnInit{
  readonly panelOpenState = signal(false);

  devices: any[] = [];

  constructor(private deviceService: DeviceService){}

  async ngOnInit(){
    await this.deviceService.getDevices()
    this.deviceService.devices.subscribe((data) => {
      this.devices = data
    })
  }

  async deleteDevice(id: number){
    await this.deviceService.deleteDevice(id)
    console.log(this.devices)
  }
}
