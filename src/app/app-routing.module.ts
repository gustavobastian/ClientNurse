import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mqtt-config',
    loadChildren: () => import('./mqtt-config/mqtt-config.module').then( m => m.MqttConfigPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'waiting-event',
    loadChildren: () => import('./waiting-event/waiting-event.module').then( m => m.WaitingEventPageModule)
  },
  {
    path: 'doctor-main',
    loadChildren: () => import('./doctor-main/doctor-main.module').then( m => m.DoctorMainPageModule)
  },
  {
    path: 'nurse-main',
    loadChildren: () => import('./nurse-main/nurse-main.module').then( m => m.NurseMainPageModule)
  },
/*
  {
    path: 'beds',
    loadChildren: () => import('./beds/beds.module').then( m => m.BedsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
