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
    path: 'doctor-main/:id',
    loadChildren: () => import('./doctor-main/doctor-main.module').then( m => m.DoctorMainPageModule)
  },
  {
    path: 'nurse-main/:id',
    loadChildren: () => import('./nurse-main/nurse-main.module').then( m => m.NurseMainPageModule)
  },
  {
    path: 'doctor-pacients/:id',
    loadChildren: () => import('./doctor-pacients/doctor-pacients.module').then( m => m.DoctorPacientsPageModule)
  },
  {
    path: 'doctor-messages/:id',
    loadChildren: () => import('./doctor-messages/doctor-messages.module').then( m => m.DoctorMessagesPageModule)
  },
  {
    path: 'nurse-bed/:id',
    loadChildren: () => import('./nurse-bed/nurse-bed.module').then( m => m.NurseBedPageModule)
  },
  {
    path: 'nurse-qr',
    loadChildren: () => import('./nurse-qr/nurse-qr.module').then( m => m.NurseQRPageModule)
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
