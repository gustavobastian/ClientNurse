# ClientNurse

MobileApp for a Nurse Call System.\
This mobile application  is presented in partial fulfillment of the requirements for the degree of IOT specialist of the UBA.

## Overall system description

This web page is part of a system that includes a mobile messaging application, a MQTT broker and a backend server.

<img src="./docs/system-diagram.png" style="width:80%; padding-left:5%">

<br>

## Technologies used

The application was developed using Ionic/angular framework. Some of the libraries used are listed below:

<ul>
<li>
Rsup-MQTT: simple wrapper for MQTT clients. ( https://www.npmjs.com/package/rsup-mqtt ).
</li>
<li>
Capacitor voice-recorder: in order to capture the user voice messages (https://www.npmjs.com/package/capacitor-voice-recorder).
</li>
<li>
Capacitor-community/barcode-scanner : used to capture the QR code of the bed (https://www.npmjs.com/package/@capacitor-community/barcode-scanner).
</li>

</ul>

## First steps for running the app

Install Ionic:

```bash
$ npm install -g @ionic/cli
```

Download this repository. Navigate to the folder and run the app:

```bash
$ cd  ClientNurse
$ ionic serve
```

or:

```bash
$ ionic lab
```

This will run the app on the browser.

## Application description

This mobile application connects to a backend [https://github.com/gustavobastian/ServerNurse](https://github.com/gustavobastian/ServerNurse) through mqtt topics. It has three different modes of use: as administrator, as a nurse and as a doctor.

### 1. Home page

In this main page, the user can go to System config page or to the Login Page.

<img src="./docs/main-page.png" style="padding-left:25%; " width="30%">

### 2. System Config page

In this system config page, you can set the ip and the port of the MQTT broker where the backend system is running. When you press save, it is saved to the local storage, when you press reset, the Mqtt client that is running the app is stopped, and then, in order to test it you need to press "test", if everything is working, below 'client' is shown the connection caracteristic.\

<p float="left">
  <img src="./docs/system-config.png" width="200" height="400"/>
  <img src="./docs/system-config2.png" width="200" height="400" /> 
</p>

### 3. Login page

After successfully connect to the system, you can login to it using your user and password.

<img src="./docs/login-page.png" style="padding-left:25%; " width="30%">

### 4. Entering administrator mode

In this mode you can monitor the status of the beds("occupied,calling nurse, in a programmed task, unoccupied") or the status of the users.

<p float="left">
  <img src="./docs/admin-beds.png" width="200" />
  <img src="./docs/admin-users.png" width="200" height="400" /> 
</p>

### 5. Entering Medical mode

In this mode the doctor can monitor the status of the patients(pressing the 'patients' button),  write/delete a note for one patient, or only listen for a nurse message.

<p float="left">
  <img src="./docs/doctor-main.png" width="200" />
  <img src="./docs/doctor-patients.png " width="200" height="390" /> 
  <img src="./docs/doctor-notes.png" width="200" height="390"/>
</p>

#### 5.1 Editing a note

After selecting a patient, the user need to press the 'go' button.

<p float="left">
  <img src="./docs/doctor-notes2.png" width="200" />
  <img src="./docs/doctor-notes3.png " width="200" height="400" /> 
  <img src="./docs/doctor-notes4.png " width="200" height="400"/>
</p>

Then, if the user press "ask" the system will retrieve the patients information('firstname','lastname' and numberId). If the user presses Notes, all the patient's notes will be retrieved from the system. If the user presses "add note", the edition page will appear.

<p float="left">
  <img src="./docs/doctor-notes5.png" width="200" height="400" />
  <img src="./docs/doctor-notes6.png " width="200" height="400" /> 
  <img src="./docs/doctor-notes7.png " width="200" height="400"/>
</p>

Pressing send the note will be saved in the system's database.

#### 5.2 Monitoring a patient

If a patient calls a nurse the status will be updated accordingly. If a nurse ask something... a notification of a message in basket will appear.

<p float="left">
  <img src="./docs/doctor-patient-2.png" width="200" height="400" />
  <img src="./docs/doctor-patient-3.png" width="200" height="400" /> 
  <img src="./docs/doctor-patient-msg.png" width="200" height="400"/>
</p>

#### 5.3 Response to messages

The messages could be of text type or audio type. In this version of the app, the audio messages are limited to less of 10 seconds.
