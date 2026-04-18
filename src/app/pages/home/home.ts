import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Exeter 501 Darts Club | Junior Darts Club in Exeter for Ages 6–18');
    this.meta.updateTag({
      name: 'description',
      content: 'Exeter 501 Darts Club is a parent-run junior darts club for 6–18 year olds. Weekly Sunday sessions at St Thomas Social Club, Exeter. Just £2.50 per session — free throughout May.'
    });
  }
}
