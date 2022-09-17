import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mqtt-config',
    loadChildren: () => import('./pages/mqtt-config/mqtt-config.module').then( m => m.MqttConfigPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'waiting-event',
    loadChildren: () => import('./pages/mode-nurse/waiting-event/waiting-event.module').then( m => m.WaitingEventPageModule)
  },
  {
    path: 'doctor-main/:id',
    loadChildren: () => import('./pages/mode-doctor/doctor-main/doctor-main.module').then( m => m.DoctorMainPageModule)
  },
  {
    path: 'nurse-main/:id',
    loadChildren: () => import('./pages/mode-nurse/nurse-main/nurse-main.module').then( m => m.NurseMainPageModule)
  },
  {
    path: 'doctor-pacients/:id',
    loadChildren: () => import('./pages/mode-doctor/doctor-pacients/doctor-pacients.module').then( m => m.DoctorPacientsPageModule)
  },
  {
    path: 'doctor-messages/:id',
    loadChildren: () => import('./pages/mode-doctor/doctor-messages/doctor-messages.module').then( m => m.DoctorMessagesPageModule)
  },
  {
    path: 'nurse-bed/:id',
    loadChildren: () => import('./pages/mode-nurse/nurse-bed/nurse-bed.module').then( m => m.NurseBedPageModule)
  },
  {
    path: 'nurse-qr/:id',
    loadChildren: () => import('./pages/mode-nurse/nurse-qr/nurse-qr.module').then( m => m.NurseQRPageModule)
  },
  {
    path: 'admin-main/:id',
    loadChildren: () => import('./pages/mode-admin/admin-main/admin-main.module').then( m => m.AdminMainPageModule)
  },  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
