// Add all services to this file
import { HomeService } from './home.service';
import { MenuService } from './menu.service';


export const httpServices = [
  HomeService,
  MenuService
];

export * from './home.service';
export * from './menu.service';
