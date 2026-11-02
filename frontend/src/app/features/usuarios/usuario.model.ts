export interface Usuario {
  _id: string;
  nome: string;
  email: string;
  perfil: string;
}

export type UsuarioEntrada = Omit<Usuario, '_id'>;
