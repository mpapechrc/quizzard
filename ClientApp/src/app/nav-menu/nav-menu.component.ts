import { Component} from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { detectMobileDevice } from '../utils/mobileDeviceDetector';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isMobile:boolean = true
  constructor(public navbarservice: NavBarService, public authService: AuthService, private router: Router) {
    this.isMobile = detectMobileDevice()
    router.events.subscribe((val) => {
      this.navbarservice.collapse();
    })
  }

  toggle() {
    this.navbarservice.toggle();
  }

  logout() {
    this.authService.logout(localStorage.getItem("username")!).subscribe(() => {
      localStorage.clear();
      this.authService.isUserLoggedIn = false;
    });
  }
  
}
