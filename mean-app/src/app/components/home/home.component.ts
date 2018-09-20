import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/http/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fireBaseData: any;
  constructor(private homeService: HomeService) { }

  ngOnInit() { }

  getFireBaseData(): void {
    this.homeService.getFireBaseData()
    .subscribe((data: any) => this.fireBaseData = data,
    (err: any) => console.log(err));
  }
}

