import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About Us | Exeter 501 Darts Club — Junior Darts in Exeter, Devon');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about Exeter 501 Darts Club — a parent-run junior darts club for 6–18 year olds in Exeter. Sundays 11am–1pm at St Thomas Social Club. Just £2.50 per session, free throughout May.'
    });
  }

  protected readonly faqs: { question: string; answer: string }[] = [
    {
      question: 'What age group is the club for?',
      answer: 'Exeter 501 Darts Club is open to young players aged 6 to 18. All abilities are welcome, from complete beginners to experienced players.'
    },
    {
      question: 'Does my child need to bring their own darts?',
      answer: 'Not initially, we can provide everything you need. Just bring your child along and we\'ll get them set up.'
    },
    {
      question: 'What happens in a typical session?',
      answer: 'Each session is a mix of structured practice, friendly games, and mentorship. It\'s relaxed, social, and focused on helping every player enjoy their darts.'
    },
    {
      question: 'Is there parking at the venue?',
      answer: 'St Thomas Social Club doesn\'t have a car park, but there is ample street parking available nearby.'
    },
    {
      question: 'Do parents need to stay during sessions?',
      answer: 'No, parents are welcome to stay, but they are not required to. We have a designated area for parents to watch the sessions.'
    },
    {
      question: 'How do I sign my child up?',
      answer: 'No need to sign up, just turn up to a session and we\'ll get them set up. We\'re a parent-run club, so we\'re always happy to see new faces.'
    }
  ];

  protected activeFaqIndex: number | null = null;

  protected toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }
}
