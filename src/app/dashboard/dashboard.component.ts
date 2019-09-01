import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
showHead = true;
  constructor(
       private router: Router,
  ) { }

  ngOnInit() {
  }


    OnSignup(){
        this.router.navigate(['/auth/signup']);
    }
}
