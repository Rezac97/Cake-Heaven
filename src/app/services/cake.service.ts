import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cake } from '../model/cake.model';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private http: HttpClient) {}

  getAllCakes(params?: any): Observable<Cake[]> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sortDirection', params.sortDirection || '')
          .set('sort', params.sort || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseUrl}/cakes`, queryParams).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Cake(elem))) || [];
      })
    );
  }

  getIngredients(): Observable<string[]> {
    return this.http.get(`${baseUrl}/ingredients`).pipe(
      map((data: any) => {
        return data as Array<string>;
      })
    );
  }

  getOneCake(id: number) {
    return this.http.get(`${baseUrl}/cakes/${id}`).pipe(
      map((data: any) => {
        return new Cake(data);
      })
    );
  }
}
