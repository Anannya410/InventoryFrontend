import { Injectable } from '@angular/core';
import { DeviceShelfPositionRelation } from '../../types/deviceShelfPositionRelation';
import axios from 'axios';
import { ShelfShelfPositionRelation } from '../../types/shelfShelfPositionRelation';

@Injectable({
  providedIn: 'root'
})
export class RelationsService {
  private addDeviceToShelfPositionUrl = "http://localhost:8080/api/shelf/relationship/device/shelfposition"
  private addShelfToShelfPositionsUrl = "http://localhost:8080/api/shelf/relationship/shelf/shelfposition"

  constructor() { }

  async addDeviceToShelfPosition(relation: DeviceShelfPositionRelation){
    try{
      await axios.post(this.addDeviceToShelfPositionUrl, relation)
    }catch(err){
      console.log(err)
    }
  }

  async addShelftoShelfPosition(relation : ShelfShelfPositionRelation){
    try{
      await axios.post(this.addShelfToShelfPositionsUrl, relation)
    }catch(err){
      console.log(err)
    }
  }

}
