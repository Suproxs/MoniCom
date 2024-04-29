import { Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {GoogleSigninButtonModule, SocialAuthService, SocialLoginModule, SocialUser} from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent,SocialLoginModule,GoogleSigninButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'login google';
  isProjectFormVisible = false;
  currentPath!: string;
  isLogin: boolean = false;
  user!: SocialUser;
  loggedIn!: boolean;

  openModal() {
      this.isProjectFormVisible = true;
  }

  closeModal() {
      this.isProjectFormVisible = false;
  }


  private authService = inject(SocialAuthService)
  private activatedRoute =  inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.activatedRoute.url.subscribe(url => {
        this.currentPath = url.join('/');
        console.log('Current Path:', this.currentPath);
      });
   });

    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = (user != null);
    });
 }



}
