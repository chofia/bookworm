import BookWorm from '../models/bookworm.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class BookwormService {

  api_url = 'http://localhost:3000';
  bookwormUrl = `${this.api_url}/api/bookworm`;

  constructor(
      private http: HttpClient
      ) { }

  createBookworm(bookworm: BookWorm): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.bookwormUrl}`, bookworm);
  }

  getBookWorms(): Observable<BookWorm[]>{
    return this.http.get(this.bookwormUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as BookWorm[];
    }))
  }

  editBookworm(bookworm:BookWorm){
    let editUrl = `${this.bookwormUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, bookworm);
  }

  deleteBookworm(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.bookwormUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}