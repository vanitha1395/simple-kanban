import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponent } from './column.component';
import { AppModule } from '../app.module'; // Import the module that declares the component

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule] // Import the module, not just individual components
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
