<<<<<<< HEAD
import { TestBed, async } from '@angular/core/testing';
=======
import { TestBed } from '@angular/core/testing';
>>>>>>> master
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD
  beforeEach(async(() => {
    TestBed.configureTestingModule({
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
>>>>>>> master
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
<<<<<<< HEAD
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
=======
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
>>>>>>> master
    expect(app).toBeTruthy();
  });

  it(`should have as title 'quote'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('quote');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to quote!');
=======
    const app = fixture.componentInstance;
    expect(app.title).toEqual('quote');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('quote app is running!');
>>>>>>> master
  });
});
