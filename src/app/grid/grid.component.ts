import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridselector:string="";
  public gridModel;
  public griddata;
  constructor() { }

  ngOnInit() {
    this.gridselector="<grid [gridConfig]='gridSampleConfig' [gridData]='gridData'></grid>";
    this.gridModel={
      layOutConfig: {
          height: '500px'
      },
      gridHeading: 'DEVICE DETAILS',
      headers: [
          {
              heading: 'Status',
              key: 'statusImg',
              isImg: true,
              width: '6%'
            },
            {
              heading: 'SNR',
              key: 'snr',
              isAsc: false,
              isDesc: false,
              width: '7%'
          }
         
  
      ],
      controls: {
          sortable: true,
          pagination: {
              recordCount: {
                  values: [10, 25, 50, 100]
              }
          }
      }
  };
  this.griddata={
    'count': 1,
    'data': [
      {
        'applicationName': 'Altivar IIoT',
        'customerId': null,
        'deviceName': 'New #0405191130',
        'deviceReference': 'ATV320U30N4B',
        'diCount': 6,
        'doCount': 1,
        'driveType': 'ATV320',
        'firmwareVersion': null,
        'frameFlowing': true,
        'groupId': 9,
        'groupName': 'AltivarGroup',
        'hardwareVersion': null,
        'id': 77
        
      }
    ],
    'pager': {
      'currentPage': 1,
      'endPage': 3,
      'firstLinkCssClass': 'First',
      'firstLinkText': '<<',
    


  'lastLinkCssClass': 'Last',
      'lastLinkText': '>>',
      'linkSelectedCssClass': 'Selected',
      'nextLinkCssClass': 'Next',
      'nextLinkText': '>',
      'pages': [

        {
          'cssClass': 'Selected',
          'pageNumber': 1,
          'sortDirection': 'DESC',
          'sortKey': 'Id',
          'text': '1'
        },
        {
          'cssClass': '',
          'pageNumber': 2,
          'sortDirection': 'DESC',
          'sortKey': 'Id',
          'text': '2'
        },
        {
          'cssClass': '',
          'pageNumber': 3,
          'sortDirection': 'DESC',
          'sortKey': 'Id',
          'text': '3'
        },
        {
          'cssClass': 'Next',
          'pageNumber': 2,
          'sortDirection': 'DESC',
          'sortKey': 'Id',
          'text': '>'
        },
        {
          'cssClass': 'Last',
          'pageNumber': 3,
          'sortDirection': 'DESC',
          'sortKey': 'Id',
          'text': '>>'
        }
  

    ],
      'pageSize': 10,
      'previousLinkCssClass': 'Previous',
      'previousLinkText': '<',
      'startPage': 1,
      'totalPages': 3
    },
    'sortDirection': 'ASC',
    'sortKey': 'Id'
}
  }

}
