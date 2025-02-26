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

  async saveShelfPosition(shelf : ShelfPosition){
    try{
      await axios.post(this.saveShelfPositionApiUrl, shelf);
    }
    catch(err){
      console.log(err)
    }
  }

}
