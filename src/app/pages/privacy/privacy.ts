import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
  styleUrl: './privacy.css'
})
export class Privacy {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Privacy Policy | Exeter 501 Darts Club');
    this.meta.updateTag({
      name: 'description',
      content: 'Privacy policy for Exeter 501 Darts Club. How we collect, use, and protect your personal information.'
    });
  }
}
