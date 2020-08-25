import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeViewComponent } from './Joke-view.component';

describe('YoMamaViewComponent', () => {
  let component: JokeViewComponent;
  let fixture: ComponentFixture<JokeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
