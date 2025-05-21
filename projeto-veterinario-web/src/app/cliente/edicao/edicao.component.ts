import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nomedoproduto: '',
    quantidade: 0,
    preco: 0,
    cliente: '',
  };
  private id!: string;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.id = String(this.router.snapshot.paramMap.get('id'));
    this.carregarCliente();
  }

  carregarCliente(): void {
    if (!this.id) {
      this.route.navigate(['/listagem']);
      return;
    }

    this.clienteService.buscarCliente(this.id).subscribe((a) => {
      this.cliente = a;
    });
  }
  salvar(): void {
    if (!this.cliente) return;

    this.clienteService.atulizarCliente(this.id, this.cliente).subscribe(() => {
      this.route.navigate(['/listagem']);
    });
  }

  carregarcliente(): void {
    if (!this.id) {
      this.route.navigate(['/listagem']);
      return;
    }
  }
}
