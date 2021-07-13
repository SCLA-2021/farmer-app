import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', produce: 'India' },
    { id: 12, name: 'Narco', produce: 'USA' },
    { id: 13, name: 'Bombasto', produce: 'UK' },
    { id: 14, name: 'Celeritas', produce: 'Canada' },
    { id: 15, name: 'Magneta', produce: 'Russia' },
    { id: 16, name: 'RubberMan', produce: 'China' },
    { id: 17, name: 'Dynama', produce: 'Germany' },
    { id: 18, name: 'Dr IQ', produce: 'Hong Kong' },
    { id: 19, name: 'Magma', produce: 'South Africa' },
    { id: 20, name: 'Tornado', produce: 'Sri Lanka' }
  ];
}
