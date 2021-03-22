import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] cargarUsuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] cargarUsuariouccess',
  props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] cargarUsuarioError',
  props<{ payload: any }>()
);
