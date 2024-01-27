import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [ProfilePage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ProfilePageRoutingModule,
        SharedModule
    ]
})
export class ProfilePageModule {}
