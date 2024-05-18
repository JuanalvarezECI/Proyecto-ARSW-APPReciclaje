import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { InformacionComponent } from './informacion.component';

describe('InformacionComponent', () => {
  let component: InformacionComponent;
  let fixture: ComponentFixture<InformacionComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionComponent],
      providers: [
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } }
      ]
    });
    fixture = TestBed.createComponent(InformacionComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test para verificar que 'goBack' llama a 'router.navigateByUrl' con la ruta correcta
  it('should navigate to /inicio when goBack is called', () => {
    component.goBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/inicio');
  });
});