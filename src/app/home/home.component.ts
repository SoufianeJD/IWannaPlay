import { Component, OnInit } from '@angular/core';
import { AnnouncementFormComponent } from '../announcement-form/announcement-form.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  Auth: boolean = false;

  constructor(private tokenStorageService: TokenStorageService,private router:Router,public dialog: MatDialog,private translate: TranslateService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }


  add(): void {
if (!this.isLoggedIn) {
  debugger
  const dialogRefe = this.dialog.open(LoginFormComponent, {
    width: '720px',
    height:'570px'
   // data: {name: this.name, animal: this.animal},
  });

  dialogRefe.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

else {

    const dialogRef = this.dialog.open(AnnouncementFormComponent, {
      width: '720px',
      height:'570px'
     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }
  view(){
    if (!this.isLoggedIn) {
      debugger
      const dialogRefe = this.dialog.open(LoginFormComponent, {
        width: '720px',
        height:'570px'
       // data: {name: this.name, animal: this.animal},
      });

      dialogRefe.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    else {
    this.router.navigate(['announcements']);
    }
  }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  userType(){
console.log(this.currentUser.isadmin)
  }
}
