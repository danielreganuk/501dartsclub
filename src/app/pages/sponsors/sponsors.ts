import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.html',
  styleUrl: './sponsors.css'
})
export class Sponsors {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Our Sponsors | Exeter 501 Darts Club');
    this.meta.updateTag({
      name: 'description',
      content: 'Meet the sponsors behind Exeter 501 Darts Club. Proudly supported by Devon County Sports, the leading darts and cricket equipment supplier in Devon.'
    });
  }
}
