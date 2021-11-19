import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  disconnect(){
    this.authService.disconnect();
    this.router.navigateByUrl('/connexion');
  }
}
