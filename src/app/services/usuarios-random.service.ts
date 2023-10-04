import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosRandomService {

  constructor(private httpClient: HttpClient) { }

  //METODO PARA OBTENER UN USUARIO ALEATORIO DE LA API
  getRandom():Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');
  }
}
