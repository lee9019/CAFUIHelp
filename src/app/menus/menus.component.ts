import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menuselector:string="";
  public menuConfig;
  constructor() { }

  ngOnInit() {
    this.menuselector=" <app-menu-web [itemsConfig]='menuConfig' class='no-left-padding no-right-padding'></app-menu-web>";
    this.menuConfig=[
      // {
      //   label: '',
      //   icon: 'pi pi-fw pi-home',
      //   routerLink: ['home'],
      //   command: event => {
      //     this.clickItem(event);
      //   }
      // },
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Angular Components',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['comps']
          },
          {
            label: 'Web Components',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['webcomps']
          },
          {
            label: 'HTML Components',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['home']
          },
          {
            label: 'Map Sample',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['mapsample']
          }
        ],
        icon: 'pi pi-fw pi-th-large'
      },
      
    ]
  }

}
