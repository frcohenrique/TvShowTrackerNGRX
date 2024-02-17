import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRegisterComponent } from './authentication-register/authentication-register.component';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [AuthenticationRegisterComponent, AuthenticationLoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [AuthenticationLoginComponent, AuthenticationRegisterComponent],
})
export class AuthenticationModule {}
