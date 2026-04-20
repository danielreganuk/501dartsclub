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
      answer: 'There is ample on-street parking available nearby. There is also a pay and display car park on Old Vicarage Road which accepts RingGo.'
    },
    {
      question: 'Do parents need to stay during sessions?',
      answer: 'If your child is under 8, a parent or guardian must remain on site for the duration of the session. For children aged 8 and over, parents are welcome to stay but are not required to.'
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
