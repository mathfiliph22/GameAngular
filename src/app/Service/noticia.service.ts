import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../Models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

//Variavel criada para armazenar o endereço da api//
  url = "http://localhost:3000/noticias";
//insere a dependendcia http client
  constructor(private httpClient: HttpClient) { }

//variavel que aramazena as configuraçoes dos headers da requisição
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
// get vai trazer as noticias da api
  getNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }

  postNoticia(noticia: Noticia): Observable<Noticia> {
    return this.httpClient.post<Noticia>(this.url, JSON.stringify(noticia), this.httpOptions)

  }

  




}
