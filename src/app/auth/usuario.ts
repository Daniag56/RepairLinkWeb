export interface Usuario {
  id: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export interface Respuesta{
  user: Usuario;
  token: string;
}
