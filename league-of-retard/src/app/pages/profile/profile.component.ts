import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
  }

  disconnect(){
    this.authService.disconnect();
    this.router.navigateByUrl('/connexion');
  }

}
