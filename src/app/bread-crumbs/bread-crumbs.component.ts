import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {
  breadcrumbselector:string="";
  public BreadCrumbConfig;
  constructor() { }

  ngOnInit() {
    this.breadcrumbselector="<app-bread-crumb [objBreadcrumbs]='objBreadcrumbs'></app-bread-crumb>"
  }

}
