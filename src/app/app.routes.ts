import { Routes } from '@angular/router';

// Tabela principal de rotas da aplicação
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Rota da tela inicial (carregamento sob demanda / Lazy Loading)
  { 
    path: 'inicio', 
    loadComponent: () => import('./features/inicio/inicio').then(m => m.Inicio) 
  },

  // Rota do perfil do usuário
  { 
    path: 'perfil', 
    loadComponent: () => import('./features/perfil/perfil').then(m => m.Perfil) 
  },

  // Rota da formação acadêmica
  { 
    path: 'formacao', 
    loadComponent: () => import('./features/formacao/formacao').then(m => m.Formacao) 
  },

  // Rota da galeria de projetos
  { 
    path: 'projetos', 
    loadComponent: () => import('./features/projetos/projetos').then(m => m.Projetos) 
  },

  // Rota das informações de contato
  { 
    path: 'contato', 
    loadComponent: () => import('./features/contato/contato').then(m => m.Contato) 
  },

  // Rota wildcard (**): se a URL digitada não existir, redireciona para '/inicio'
  { path: '**', redirectTo: 'inicio' }
];