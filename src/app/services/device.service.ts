import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private saveApiUrl = 'http://localhost:8080/api/devices/save';
  private getApiUrl = 'http://localhost:8080/api/devices/get';
  private deteleApiUrl = 'localhost:8080/api/devices/delete/';

  constructor() { }

  saveDevice(device: any): Observable<any> {
    return new Observable((observer)=>{
      axios.post(this.saveApiUrl, device, {
        headers: {'Content-Type': 'application/json'}
      })
      .then((response)=> {
          observer.next(response.data);
          observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
    });
  }

  getDevices(): Observable<any>{
    return new Observable((observer) =>{
      axios.get(this.getApiUrl)
      .then((response) => {
        observer.next(response.data);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      })
    })
  }


}
