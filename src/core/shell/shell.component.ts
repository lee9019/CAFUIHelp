import { Router} from '@angular/router';
import { state } from '@angular/animations';
import { OnInit, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  itemData: MenuItem[];
  objBreadcrumbs: MenuItem[];
  currentUrl: string;
  constructor( private router: Router) {
    debugger;
    this.itemData = [
      // {
      //   label: '',
      //   icon: 'pi pi-fw pi-home',
      //   routerLink: ['home'],
      //   command: event => {
      //     this.clickItem(event);
      //   }
      // },
      {
        label: 'Web Components',
        expanded:true,
        items: [
          {
            label: 'Bread Crumb',
         
            routerLink: ['BreadCrumb'],
            command: event => {
              this.clickItem(event);
            }
          },
          {
            label: 'Chart',
           
            routerLink: ['Chart'],
            command: event => {
              this.clickItem(event);
            }
          },
          {
            label: 'Grid',
           
            routerLink: ['Grid'],
            command: event => {
              this.clickItem(event);
            }
          },
          {
            label: 'Map',
          
            routerLink: ['Map'],
            command: event => {
              this.clickItem(event);
            }
          },
          {
            label: 'Menu',
            routerLink: ['Menu'],
            command: event => {
              this.clickItem(event);
            }
          }
        ]
      }
    ];
  }
  ngOnInit() {
    /* this.breadcrumbService.setBreadcrumbs('Home');
    this.breadcrumbService.breadcrumbItem.subscribe((val: MenuItem[]) => {
      if (val) {
        this.objBreadcrumbs = val;
      }
    }); */
  }
  clickItem(event: any) {
    if (event.item.routerLink) {
      if (this.router.url !== ('/' + event.item.routerLink)) {
        const routepath = event.item.routerLink;
        this.router.navigate(routepath);
      }
    }
   /*  this.breadcrumbService.setBreadcrumbs(event.item.label);
    this.breadcrumbService.breadcrumbItem.subscribe((val: MenuItem[]) => {
      if (val) {
        this.objBreadcrumbs = val;
      }
    }) */;
  }
  clickItemB(event: any) {
  //  this.breadcrumbService.setBreadcrumbs(event);
  }
}

