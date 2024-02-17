import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './services/tmdb-api.service';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showHeader: boolean = false;
  public currentUser: [] | any = [];

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {}

  title = 'TvShowTrackerNGRX';

  signOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['/authentication/login']);
    });
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      this.showHeader = isAuthenticated;
      this.authService.getCurrentUser().subscribe((currentUser: any) => {
        // this.dataService.setCurrentUserId(currentUser?.uid);
        this.currentUser = currentUser;
      });
    });
  }
}
