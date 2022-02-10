import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { LoginadmComponent } from './loginadm/loginadm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioComponent, LoginadmComponent]
})
export class LoginModule { }
