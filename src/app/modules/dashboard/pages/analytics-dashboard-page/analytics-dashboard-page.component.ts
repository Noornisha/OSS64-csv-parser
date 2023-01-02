import * as Papa from 'papaparse';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analytics-dashboard-page',
  templateUrl: './analytics-dashboard-page.component.html',
  styleUrls: ['./analytics-dashboard-page.component.scss'],
})
export class AnalyticsDashboardPageComponent {
  listOfData: any[] = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park',
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    // },
  ];
  public userArray: any[] = [];
  tableHeader: any[] = [];
  loading = true;
  constructor(private http: HttpClient) {
    Papa.parse('assets/list.csv', {
      download: true,
      header: true,
      complete: (results) => {
        console.log('Finished:', this.listOfData);
        this.listOfData = this.listOfData;
        this.tableHeader = Object.keys(this.listOfData[0]);
        console.log('tableHeader', this.tableHeader);
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: (error) => {
        console.log('Error:', error);
        this.loading = false;
      },
      step: (row: any) => {
        this.listOfData.push({
          ...row.data,
        } as any);
      },
    });
  }
}
