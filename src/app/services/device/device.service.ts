import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';
import { Device} from '../../types/device'; 

@Injectable({
  providedIn: 'root',
})
export class DeviceDataService {
  private saveApiUrl = 'http://localhost:8080/api/devices/save';
  private getApiUrl = 'http://localhost:8080/api/devices/getall';
  private deleteApiUrl = 'http://localhost:8080/api/devices/delete';
  private updateApiUrl = 'http://localhost:8080/api/devices/update';

  private devicesObservable$: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>(
    []
  );

  devices = this.devicesObservable$.asObservable();

  constructor() {}

  async saveDevice(device: Device) {
    try {
      const response = await axios.post(this.saveApiUrl, device);
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getDevices() {
    try {
      const response = await axios.get(this.getApiUrl);
      console.log("response.data: ", response.data)
      this.devicesObservable$.next(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async updateDevice(device: Device) {
    try {
      await axios.put(this.updateApiUrl, device);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteDevice(name: string) {
    try {
      const response = await axios.delete(`${this.deleteApiUrl}/${name}`);
      if (response.status === 200) {
        const updatedData = this.devicesObservable$.value.filter(
          (item: Device) => item.name !== name
        );
        this.devicesObservable$.next(updatedData);
        console.log('Device Deleted Successfully');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
