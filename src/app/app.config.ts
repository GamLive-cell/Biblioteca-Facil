import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { UsuariosService } from './features/usuarios/usuarios.service';
import { UsuariosMockService } from './features/usuarios/usuarios-mock.service';
import { LivrosService } from './features/livros/livros.service';
import { LivrosMockService } from './features/livros/livros-mock.service';
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes),
    { provide: UsuariosService, useClass: UsuariosMockService },
    { provide: LivrosService, useClass: LivrosMockService },
  ],
};
