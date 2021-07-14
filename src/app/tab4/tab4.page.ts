import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor() {}
}
export class HomePage implements OnInit {
  type: string;
  posts() {}

  ngOnInit() {
    this.type = 'Posts';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
