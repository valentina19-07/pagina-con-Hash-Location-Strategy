import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { Projects } from './projects';
import { Contact } from './contact';

describe('Pages', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, Projects, Contact],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create Home', () => {
    expect(TestBed.createComponent(Home).componentInstance).toBeTruthy();
  });

  it('should create Projects', () => {
    expect(TestBed.createComponent(Projects).componentInstance).toBeTruthy();
  });

  it('should create Contact', () => {
    expect(TestBed.createComponent(Contact).componentInstance).toBeTruthy();
  });
});
