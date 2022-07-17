import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }
  private async saveParametersFile(serverMqtt: string, portMqtt:string) {
    const data="serverMqtt:" + serverMqtt + ", portMqtt:" + portMqtt;
    const fileName = new Date().getTime() + '.txt';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: data,
      directory: Directory.Data
    });
   }


}
