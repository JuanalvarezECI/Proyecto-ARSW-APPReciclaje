import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SocketService } from '../conexion';
import { SeeOffersComponent } from './see-offers.component';

describe('SeeOffersComponent', () => {
  let component: SeeOffersComponent;
  let fixture: ComponentFixture<SeeOffersComponent>;
  let mockSocketService: jasmine.SpyObj<SocketService>;
  beforeEach(() => {

    mockSocketService = jasmine.createSpyObj(['getOffersUpdateListener', 'getEstado', 'takeOffer']);

    mockSocketService.getOffersUpdateListener.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [SeeOffersComponent],
      providers: [{ provide: SocketService, useValue: mockSocketService }]
    });

    fixture = TestBed.createComponent(SeeOffersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should take offer if estado is not "Asignado"', () => {
    const offerId = 1;
    mockSocketService.getEstado.and.returnValue('Disponible');
    component.consultarOferta(offerId);
    expect(mockSocketService.takeOffer).toHaveBeenCalledWith(offerId);
  });

  it('should not take offer if estado is "Asignado"', () => {
    const offerId = 1;
    mockSocketService.getEstado.and.returnValue('Asignado');
    component.consultarOferta(offerId);
    expect(mockSocketService.takeOffer).not.toHaveBeenCalled();
  });
});