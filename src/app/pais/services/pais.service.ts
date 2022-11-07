import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  // private filtersUrl: string = '?fields=flags,capital,name,population,cca2';

  
  get httpParams() {
    return new HttpParams().set('fields','flags,capital,name,population,cca2');
  }
  
 
  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    // const url = `${this.apiUrl}/name/${termino}${this.filtersUrl}`;
    const url = `${this.apiUrl}/name/${termino}`;
    // return this.http.get<Country[]>(url);
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorId(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
