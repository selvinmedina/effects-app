import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService
      .getUsers()
      .pipe(map((resp) => resp['data']))
      .subscribe((users) => {
        console.log(users);
      });
  }
}
