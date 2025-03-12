import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { ShelfPosition } from '../../types/shelfPosition';

@Injectable({
  providedIn: 'root'
})
export class ShelfPositionDataService {
  private getShelfPositionsApiUrl = 'http://localhost:8080/api/shelf/shelfposition/get';
  private saveShelfPositionApiUrl = 'http://localhost:8080/api/shelf/shelfposition/save';
  private updateShelfPositionApiUrl = 'http://localhost:8080/api/shelf/shelfposition/update';
  private deleteShelfPositionApiUrl = 'http://localhost:8080/api/shelf/shelfposition/delete'

  private shelfPositionsObservable$: BehaviorSubject<ShelfPosition[]> = new BehaviorSubject<ShelfPosition[]>(
    []
  );

  shelves = this.shelfPositionsObservable$.asObservable();

  constructor() {}

  async getShelfPositions(){
    try{
      const response = await axios.get(this.getShelfPositionsApiUrl);
      this.shelfPositionsObservable$.next(response.data);
    }
    catch(err){
      console.log(err)
    }
  }

  async saveShelfPosition(shelfPosition : ShelfPosition){
    try{
      await axios.post(this.saveShelfPositionApiUrl, shelfPosition);
    }
    catch(err){
      console.log(err)
    }
  }

  async updateShelfPosition(shelfPosition : ShelfPosition){
    try{
      await axios.put(this.updateShelfPositionApiUrl, shelfPosition);
    }catch(err){
      console.log(err);
    }
  }

  async deleteShelfPosition(id : number){
    try{
      const response = await axios.delete(`${this.deleteShelfPositionApiUrl}/${id}`)
      if(response.status === 200){
        const updatedData = this.shelfPositionsObservable$.value.filter(
          (item : ShelfPosition) => item.id !== id
        );
        this.shelfPositionsObservable$.next(updatedData)
      }
    }catch(err){
      console.log(err);
      
    }
  }

}
