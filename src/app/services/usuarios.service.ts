import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import {  catchError, map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  obtenerUsuario(): Observable<any>{
    return this.http.get<any>('https://reqres.in/api/user/').pipe( 
       map( resp => resp['data']),
    );
  }
}
