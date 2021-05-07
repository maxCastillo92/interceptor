import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _subjectReplay:ReplaySubject<any> = new ReplaySubject(1);

  
  constructor(private userService?: UsuariosService){
    this.userService.obtenerUsuario().subscribe( res => {
      this._subjectReplay.next(res)
      // console.log(res);
    }, (err) => {
      console.log('Error en el app component');
      
    });

    this.obtenerSubscripcion();
  }

  get obtenerData():Observable<string>{
    return this._subjectReplay
  }

  title = 'angular-interceptores';

  obtenerSubscripcion():void{
    this.obtenerData.subscribe( subs => {
      console.log(subs);
      
    });
  }
}

