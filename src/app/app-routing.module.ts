import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; //login page
import { HomeregComponent } from './homereg/homereg.component'; //registration page

//patient module
import { PtnavComponent } from './ptnav/ptnav.component';
import { PtconsultationComponent } from './ptconsultation/ptconsultation.component'; //book a consultation page
import { PthistoryComponent } from './pthistory/pthistory.component'; //view patient medical history
import { PtmessageComponent } from './ptmessage/ptmessage.component'; //private messages - inbox, create, sent
import { PtprofileComponent } from './ptprofile/ptprofile.component'; //patient information

//doctor module
import { DrnavComponent } from './drnav/drnav.component';
import { DrbookingComponent } from './drbooking/drbooking.component'; //patient booking list for consultation
import { DrconsultationComponent } from './drconsultation/drconsultation.component'; //scheduled consultation - confirmed from booking page
import { DrmessageComponent } from './drmessage/drmessage.component'; //private messages - onbox, create, sent
import { DrmrecordComponent } from './drmrecord/drmrecord.component'; //medical records of patients
import { DrprofileComponent } from './drprofile/drprofile.component'; //doctor information


const routes: Routes = [
  { path: 'login-component', component: LoginComponent }, //login page
  { path: '', component: HomeregComponent }, //registration page is home page
  { path: 'patient', component: PtnavComponent, //user is a patient
      children:[
        {path: '', component: PtconsultationComponent},
        {path: 'consult', component: PtconsultationComponent},
        {path: 'history', component: PthistoryComponent},
        {path: 'message', component: PtmessageComponent},
        {path: 'profile', component: PtprofileComponent}
      ]
  },
  { path: 'doctor', component: DrnavComponent, //user is a doctor
      children:[
        {path: '',component: DrbookingComponent},
        {path: 'booking', component: DrbookingComponent},
        {path: 'consultation', component: DrconsultationComponent},
        {path: 'message', component: DrmessageComponent},
        {path: 'record', component: DrmrecordComponent},
        {path: 'profile', component: DrprofileComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
