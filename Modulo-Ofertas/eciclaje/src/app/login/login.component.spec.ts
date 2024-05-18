import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { SocketService } from '../conexion';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: MsalService;
  let router: Router;
  let socketService: SocketService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } },
        { provide: HttpClient, useValue: {} },
        { provide: SocketService, useValue: {} },
        { provide: MsalService, useValue: { instance: { initialize: jasmine.createSpy('initialize').and.returnValue(Promise.resolve()), setActiveAccount: jasmine.createSpy('setActiveAccount') }, loginPopup: jasmine.createSpy('loginPopup').and.returnValue(of({ account: {} })) } }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(MsalService);
    router = TestBed.inject(Router);
    socketService = TestBed.inject(SocketService);
    http = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Msal on init', async () => {
    await component.ngOnInit();
    expect(authService.instance.initialize).toHaveBeenCalled();
  });

  it('should login and set active account', () => {
    component.login();
    expect(authService.loginPopup).toHaveBeenCalled();
    expect(authService.instance.setActiveAccount).toHaveBeenCalled();
  });
});