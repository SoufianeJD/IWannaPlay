import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AnnouncementFormComponent } from '../announcement-form/announcement-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  Auth: boolean = false;
  constructor(private tokenStorageService: TokenStorageService,private router:Router,public dialog: MatDialog,private translate: TranslateService) {
    translate.setDefaultLang('en');
}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AnnouncementFormComponent, {
      width: '720px',
      height:'570px'
     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  openSignIn(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '720px',
      height:'570px'
     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  openSignUp(): void {
    const dialogRef = this.dialog.open(RegisterFormComponent, {
      width: '720px',
      height:'570px'
     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  profile(){
if (this.Auth != null ) {
  this.router.navigate(['profile']);
}
else {
  window.alert("Bonjour !");
}
  }

  home(){
    this.router.navigate(['home']);
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();

  }
}
