import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SocketService } from '../conexion';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let router: Router;
  let socketService: SocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      providers: [
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } },
        { provide: SocketService, useValue: { getPointsUpdateListener: () => of(10), getRol: () => 'rol', getName: () => 'nombre', updateOffers: jasmine.createSpy('updateOffers') } }
      ]
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    socketService = TestBed.inject(SocketService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct values from socketService', () => {
    expect(component.rol).toBe('rol');
    expect(component.nombreUsuario).toBe('nombre');
    expect(component.puntaje).toBe(10);
  });

  it('should navigate to /new-offers when redirect is called with crear', () => {
    component.redirect('crear');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/new-offers');
  });

  it('should navigate to /see-offers when redirect is called with ofertas', () => {
    component.redirect('ofertas');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/see-offers');
    expect(socketService.updateOffers).toHaveBeenCalled();
  });

  it('should navigate to /informacion when redirect is called with informacion', () => {
    component.redirect('informacion');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/informacion');
  });

  it('should navigate to /premios when redirect is called with premios', () => {
    component.redirect('premios');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/premios');
  });

  it('should navigate to /my-offers when redirect is called with any other path', () => {
    component.redirect('any other path');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/my-offers');
    expect(socketService.updateOffers).toHaveBeenCalled();
  });
});