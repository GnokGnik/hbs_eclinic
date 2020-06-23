import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeregComponent } from './homereg/homereg.component';
import { PtnavComponent } from './ptnav/ptnav.component';
import { DrnavComponent } from './drnav/drnav.component';
import { PtconsultationComponent } from './ptconsultation/ptconsultation.component';
import { PtmessageComponent } from './ptmessage/ptmessage.component';
import { PthistoryComponent } from './pthistory/pthistory.component';
import { PtprofileComponent } from './ptprofile/ptprofile.component';
import { DrbookingComponent } from './drbooking/drbooking.component';
import { DrconsultationComponent } from './drconsultation/drconsultation.component';
import { DrmrecordComponent } from './drmrecord/drmrecord.component';
import { DrmessageComponent } from './drmessage/drmessage.component';
import { LogoutComponent } from './logout/logout.component';
import { DrprofileComponent } from './drprofile/drprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeregComponent,
    PtnavComponent,
    DrnavComponent,
    PtconsultationComponent,
    PtmessageComponent,
    PthistoryComponent,
    PtprofileComponent,
    DrbookingComponent,
    DrconsultationComponent,
    DrmrecordComponent,
    DrmessageComponent,
    LogoutComponent,
    DrprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
