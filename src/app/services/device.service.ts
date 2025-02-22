import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private saveApiUrl = 'http://localhost:8080/api/devices/save';
  private getApiUrl = 'http://localhost:8080/api/devices/getall';
  private deleteApiUrl = 'http://localhost:8080/api/devices/delete';

  constructor() {}

  private devicesObservable$: BehaviorSubject<any> = new BehaviorSubject<any[]>(
    []
  );

  devices = this.devicesObservable$.asObservable();

  async saveDevice(device: any) {
    try{
      const response = await axios.post(this.saveApiUrl, device)
      if(response.status === 200){
        console.log(response.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }
    
  async getDevices() {
    try{
      const response = await axios.get(this.getApiUrl)
      this.devicesObservable$.next(response.data)
    }catch(err){
      console.log(err);
    }
  }

  async deleteDevice(id: number){
    try{
      const response = await axios.delete(`${this.deleteApiUrl}/${id}`)
      if(response.status === 200){
        const updatedData = this.devicesObservable$.value.filter((item:any) => item.id!==id)
        this.devicesObservable$.next(updatedData)
        console.log('Device Deleted Successfully');
      }
    }catch(err){
      console.log(err);
    } 
  }
}
