import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Array<{ [key: string]: any }>;
  constructor() { }

  ngOnInit(): void {
    this.data = [
      { label: 'Mobile internet', imgSrc: '' },
      { label: 'Home internet', imgSrc: '' },
      { label: 'Get a device', imgSrc: '' },
      { label: 'Add a phone-line', imgSrc: '' },
      { label: 'Upgrade', imgSrc: '' },
    ];
  }

}
