import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/http/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mongoData: any;

  constructor(private menuService: MenuService) { }

  ngOnInit() { }

  getMongoData(): void {
    this.menuService.getMongoData()
      .subscribe((data: any) => this.mongoData = data,
      (err: any) => console.log(err));
  }
}
