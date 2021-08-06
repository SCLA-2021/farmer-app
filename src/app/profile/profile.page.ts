import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  icon: string =
    'https://lh4.googleusercontent.com/Uar7UY8ulMpzODZYaEVgnUL6NRbKGpJJWr2DwbnG61SMjtyQbq96J6Y5NHc5jNr9ZeO0295JgzvqUoBeHL0d_dwUrFaWyTNUFjdIBkds2c88s5v0k_wyaAl0Hl94H-FrrPeTlAlv';
  constructor() {}
  async change() {
    // this.icon = 'https://lh4.googleusercontent.com/J_ryNPLgttOZ-CMOvROu9JMhB1EfgE9SfrKtiVpPba2zVW11oSfQfpM1n1Ql4P8RJDnJkbHlI5qpjg163jKNdWvkYoB9jic_C4YSZQqSIHIta3lDiJS28vnWpinR-rctdpWFSBi6';
  }
}
