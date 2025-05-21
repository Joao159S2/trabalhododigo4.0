import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL= 'http://localhost:3000/veterinario';

  constructor(private http: HttpClient) { }

  listaCliente(): Observable<Cliente[]>  {
    return this.http.get<Cliente[]>(this.apiURL);

    
  }
  cadastrarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiURL,cliente);

  }
  buscarCliente(id:string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }

  atulizarCliente(id:string,cliente:Cliente): Observable<Cliente>{
    return this.http.patch<Cliente>(`${this.apiURL}/${id}`,cliente);

  }
  deletarCliente(id:string):Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }



}
