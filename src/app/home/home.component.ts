import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails: Object;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUserprofile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    )
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
