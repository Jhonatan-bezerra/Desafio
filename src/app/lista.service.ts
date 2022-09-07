import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ILista } from './ILista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<ILista[]>(`${API_PATH}infos`).toPromise();
  }
}
