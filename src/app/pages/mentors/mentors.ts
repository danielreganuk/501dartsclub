import {Component, signal, computed, OnInit, OnDestroy, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';

interface Mentor {
  name: string;
  image: string;
  position: string;
  bio: string;
  favouritePlayer: string;
}

@Component({
  selector: 'app-mentors',
  imports: [],
  templateUrl: './mentors.html',
  styleUrl: './mentors.css'
})
export class Mentors implements OnInit, OnDestroy {
  private autoplayInterval: ReturnType<typeof setInterval> | null = null;
  private isBrowser: boolean;

  protected readonly mentors = signal<Mentor[]>([]);
  protected readonly activeIndex = signal(0);

  protected readonly activeMentor = computed(() => {
    const all = this.mentors();
    return all.length > 0 ? all[this.activeIndex()] : null;
  });

  protected readonly visibleSlides = computed(() => {
    const all = this.mentors();
    const len = all.length;
    if (len === 0) return [];

    const idx = this.activeIndex();
    const result: { mentor: Mentor; position: number }[] = [];

    for (let offset = -2; offset <= 2; offset++) {
      const i = ((idx + offset) % len + len) % len;
      result.push({ mentor: all[i], position: offset });
    }
    return result;
  });

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.title.setTitle('Our Mentors | Exeter 501 Darts Club — Meet the Team');
    this.meta.updateTag({
      name: 'description',
      content: 'Meet the mentors behind Exeter 501 Darts Club. Passionate volunteers who give their time to help young darts players grow, improve, and enjoy the sport.'
    });
  }

  ngOnInit(): void {
    const allMentors: Mentor[] = [
      { name: 'Adam', image: 'assets/people/adam.png', position: 'Mentor', bio: '', favouritePlayer: 'Gerwyn Price' },
      { name: 'Chantale', image: 'assets/people/chantale.png', position: 'Helper', bio: '', favouritePlayer: 'Nathan Aspinall' },
      { name: 'Dan', image: 'assets/people/dan.png', position: 'Mentor', bio: '', favouritePlayer: 'Damon Heta' },
      { name: 'Kirsty', image: 'assets/people/kirsty.png', position: 'Community Coordinator', bio: '', favouritePlayer: 'Stephen Bunting' },
      { name: 'Marie', image: 'assets/people/marie.png', position: 'Helper', bio: '', favouritePlayer: 'Nathan Aspinall' },
      { name: 'Nat', image: 'assets/people/nat.png', position: 'Helper', bio: '', favouritePlayer: 'MVG' },
      { name: 'Neil', image: 'assets/people/neil.png', position: 'Mentor', bio: '', favouritePlayer: 'Simon Whitlock' },
      { name: 'Paul', image: 'assets/people/paul.png', position: 'Mentor', bio: '', favouritePlayer: 'Michael Smith' },
      { name: 'Scott', image: 'assets/people/scott.png', position: 'Mentor', bio: '', favouritePlayer: 'Luke Littler' },
    ];

    this.mentors.set(this.shuffle(allMentors));
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  protected goTo(index: number): void {
    const len = this.mentors().length;
    this.activeIndex.set(((index % len) + len) % len);
    this.restartAutoplay();
  }

  protected next(): void {
    this.goTo(this.activeIndex() + 1);
  }

  protected prev(): void {
    this.goTo(this.activeIndex() - 1);
  }

  protected onSwipe(startX: number, endX: number): void {
    const threshold = 50;
    if (startX - endX > threshold) this.next();
    else if (endX - startX > threshold) this.prev();
  }

  private shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private startAutoplay(): void {
    if (!this.isBrowser) return;
    this.autoplayInterval = setInterval(() => this.next(), 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
