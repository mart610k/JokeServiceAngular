import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoMamaViewComponent } from './yo-mama-view.component';

describe('YoMamaViewComponent', () => {
  let component: YoMamaViewComponent;
  let fixture: ComponentFixture<YoMamaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoMamaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoMamaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
