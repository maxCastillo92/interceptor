import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHeadersService implements HttpInterceptor{
 
  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{ 
    const reqClone = req.clone({  
      headers: req.headers.set('Content-Type','application/json'),
      // responseType: 'arraybuffer'
    });
    return next.handle(reqClone).pipe( 
      catchError( this.manejarError)
    ); 
  }

  manejarError( error : HttpErrorResponse){
    console.log('Sucedio un error');
    console.warn(error)
    return throwError('Error personalizado')
  }
}
