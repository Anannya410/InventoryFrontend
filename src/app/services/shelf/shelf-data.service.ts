import { Injectable } from '@angular/core';
import { Shelf } from '../../types/shelf';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ShelfDataService {
  private getShelfApiUrl = 'http://localhost:8080/api/shelf/getall';
  private saveShelfApiUrl = 'http://localhost:8080/api/shelf/save';
  private updateShelfApiUrl = 'http://localhost:8080/api/shelf/update';
  private deleteShelfApiUrl = 'http://localhost:8080/api/shelf/delete'

  private shelvesObservable$: BehaviorSubject<Shelf[]> = new BehaviorSubject<Shelf[]>(
    []
  );

  shelves = this.shelvesObservable$.asObservable();

  constructor() {}

  async getShelves(){
    try{
      const response = await axios.get(this.getShelfApiUrl);
      this.shelvesObservable$.next(response.data);
    }
    catch(err){
      console.log(err)
    }
  }

  async saveShelf(shelf : Shelf){
    try{
      await axios.post(this.saveShelfApiUrl, shelf);
    }
    catch(err){
      console.log(err)
    }
  }

  async updateShelf(shelf : Shelf){
    try{
      await axios.put(this.updateShelfApiUrl, shelf);
    }catch(err){
      console.log(err);
    }
  }

  async deleteShelf(id : number){
    try{
      const response = await axios.delete(`${this.deleteShelfApiUrl}/${id}`)
      if(response.status === 200){
        const updatedData = this.shelvesObservable$.value.filter(
          (item: Shelf) => item.id !== id
        );
        this.shelvesObservable$.next(updatedData)
      }
    }catch(err){
      console.log(err);
      
    }
  }

}
