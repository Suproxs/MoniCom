import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialLoginModule,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

const MODULES = [SocialLoginModule, GoogleSigninButtonModule];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private accessToken = '';
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
       console.log(user);
       this.user = user;
       this.loggedIn = user != null;
       if (this.loggedIn) {
         // Obtén el token de acceso después de iniciar sesión
         this.getAccessToken();
         // Navega al dashboard
         this.router.navigate(['/dashboard']);
       }
    });
   }

   refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(() => {
       // Obtén el token de acceso después de refrescarlo
       this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then((newToken: string) => {
         // Asegúrate de que newToken es una cadena antes de almacenarlo en localStorage
         if (typeof newToken === 'string') {
           localStorage.setItem('access_token', newToken);
         } else {
           console.error('Expected newToken to be a string, but received:', newToken);
         }
       });
    });
   }


  getAccessToken(): void {
    this.authService
       .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
       .then((accessToken) => {
         this.accessToken = accessToken;
         // Almacena el token de acceso en localStorage
         localStorage.setItem('access_token', accessToken);
       });
   }

   signOut(): void {
    this.authService.signOut();
    // Elimina el token de acceso almacenado
    localStorage.removeItem('access_token');
   }


}
