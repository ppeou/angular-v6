import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css'],
})
export class ContentBodyComponent implements OnInit {
  items: Array;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getSampleData().then(r => {
      console.log(r);
      this.items = r;
    });
  }

}
