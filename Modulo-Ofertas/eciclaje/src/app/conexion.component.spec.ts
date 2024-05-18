import { TestBed } from '@angular/core/testing';
import { SocketService } from './conexion';
import { Socket } from 'socket.io-client';
import { of } from 'rxjs';

describe('SocketService', () => {
  let service: SocketService;
  let socketSpy: jasmine.SpyObj<Socket>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Socket', ['on', 'emit']);

    TestBed.configureTestingModule({
      providers: [
        SocketService,
        { provide: Socket, useValue: spy }
      ]
    });

    service = TestBed.inject(SocketService);
    socketSpy = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

  it('should get name', () => {
    service.setname('test');
    expect(service.getName()).toEqual('test');
  });
  it('should set points', () => {
    service.setname('test'); // ensure the name is set
    service.setpoints();
    expect(socketSpy.emit).toHaveBeenCalledWith('getPoints', 'test'); // expect 'test' instead of ''
  });
  
  it('should get points', () => {
    service.setpoints();
    expect(service.getPoints()).toEqual(0);
  });
  
  it('should set role', () => {
    service.setRol('testRole');
    expect(service.getRol()).toEqual('testRole');
  });
  
  it('should handle "puntos" event', () => {
    const data = { [service.getName()]: { puntos: 10 } };
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'puntos') {
        callback(data);
      }
      return socketSpy;

    });
  
    service.getPointsUpdateListener().subscribe(points => {
      expect(points).toEqual(10);
    });
  });
  
  it('should handle "sendPoints" event', () => {
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'sendPoints') {
        callback(20);
      }
      
      return socketSpy;
    });
  
    service.getPointsUpdateListener().subscribe(points => {
      expect(points).toEqual(20);
    });
  });
  
  it('should handle "myupdate-offers" event', () => {
    const offers = { 'offer1': { data: [null, service.getName()] } };
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'myupdate-offers') {
        callback(offers);
      }
      
      return socketSpy;
    });
  
    service.getMyOffersUpdateListener().subscribe(myOffers => {
      expect(myOffers).toEqual([['offer1', { data: [null, service.getName()] }]]);
    });
  });
  it('should handle "update-offers" event', () => {
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'update-offers') {
        callback(['offer1', 'offer2']);
      }
      return socketSpy;
    });

    service.getOffersUpdateListener().subscribe(offers => {
      expect(offers).toEqual(['offer1', 'offer2']);
    });
  });
  it('should handle "myupdate-offers_usser" event', () => {
    const offers = { 'offer1': { data: [null, service.getName()] } };
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'myupdate-offers_usser') {
        callback(offers);
      }
      return socketSpy;

    });
  
    service.getMyOffersUpdateListener().subscribe(myOffers => {
      expect(myOffers).toEqual([['offer1', { data: [null, service.getName()] }]]);
    });
  });
  
  it('should handle "premios" event', () => {
    const data = ['premio1', 'premio2'];
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'premios') {
        callback(data);
      }
      return socketSpy;

    });
  
    service.getpricesUpdateListener().subscribe(premios => {
      expect(premios).toEqual(data);
    });
  });
  
  it('should take price', () => {
    const premio = 'premio1';
    service.takePrice(premio);
    expect(socketSpy.emit).toHaveBeenCalledWith('takePrice', [premio, service.getName()]);
  });
  
  it('should update offers', () => {
    service.updateOffers();
    expect(socketSpy.emit).toHaveBeenCalledWith('updateOffers', true);
  });
  
  it('should handle "message" event', () => {
    const data = 'test message';
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'message') {
        callback(data);
      }
      return socketSpy;

    });
  
    spyOn(console, 'log');
    service.onMessage();
    expect(console.log).toHaveBeenCalledWith(data);
  });
  it('should handle "update-offers" event', (done) => {
    const offers = ['offer1', 'offer2'];
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'update-offers') {
        callback(offers);
      }
      return socketSpy;

    });
  
    service.getOffers();
    service.getOffersUpdateListener().subscribe(offersData => {
      expect(offersData).toEqual(offers);
      done();
    });
  });
  
  it('should handle "myupdate-offers" event', (done) => {
    const myOffers = ['myOffer1', 'myOffer2'];
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'myupdate-offers') {
        callback(myOffers);
      }
      return socketSpy;

    });
  
    service.getMyOffers();
    service.getMyOffersUpdateListener().subscribe(myOffersData => {
      expect(myOffersData).toEqual(myOffers);
      done();
    });
  });

  it('should get estadoOferta', () => {
    const estado = 'test';
    service.estadoOferta = estado;
    expect(service.getEstado()).toEqual(estado);
  });
  
  it('should emit "take-offer" event and set estadoOferta', () => {
    const id = 'testId';
    service.takeOffer(id);
    expect(service.getEstado()).toEqual('Asignado');
    expect(socketSpy.emit).toHaveBeenCalledWith('take-offer', [service.getName(), id]);
  });
  it('should emit "endState" event and reset estadoOferta', () => {
    const id = 'testId';
    service.setStatusEnd(id);
    expect(service.getEstado()).toEqual('');
    expect(socketSpy.emit).toHaveBeenCalledWith('endState', [service.getName(), id]);
  });
  it('should emit "new-offer" event', () => {
    const request: [any, any, any, any, any] = ['nombre', 'direccion', 'estado', 'material', 'cantidad'];
    socketSpy.emit.and.callFake((eventName, data) => {
      if (eventName === 'new-offer') {
        expect(data).toEqual([service.getName(), { data: request }]);
      }
      return socketSpy;
    });
  
    service.newRequest(...request);
    expect(socketSpy.emit).toHaveBeenCalledWith('new-offer', [service.getName(), { data: request }]);
  });
  it('should emit "message" event', () => {
    const message = 'test message';
    socketSpy.emit.and.callFake((eventName, msg) => {
      if (eventName === 'message') {
        expect(msg).toEqual(message);
      }
      return socketSpy;
    });
  
    service.sendMessage(message);
    expect(socketSpy.emit).toHaveBeenCalledWith('message', message);
  });
  
  it('should emit "updateOffers" event', () => {
    socketSpy.emit.and.callFake((eventName, value) => {
      if (eventName === 'updateOffers') {
        expect(value).toEqual(true);
      }
      return socketSpy;
    });
  
    service.updateOffers();
    expect(socketSpy.emit).toHaveBeenCalledWith('updateOffers', true);
  });
  
  it('should handle "message" event', () => {
    const data = 'test data';
    socketSpy.on.and.callFake((eventName, callback) => {
      if (eventName === 'message') {
        callback(data);
      }
      return socketSpy;
    });
  
    spyOn(console, 'log');
  
    service.onMessage();
    expect(console.log).toHaveBeenCalledWith(data);
  });
  it('should get status', (done) => {
    const response = [
      ['id1', { data: ['data1'] }],
      ['id2', { data: ['data2'] }]
    ];
    const transformedData = response.map(([id, content]) => {
      if (typeof content === 'object' && content !== null && 'data' in content) {
        return { id: id, data: content.data };
      }
      return null;
    })
    socketSpy.emit.and.callFake((eventName, name, callback) => {
      if (eventName === 'canCreate' && name === service.getName()) {
        callback(response);
      }
      return socketSpy;
    });
  
    spyOn(console, 'log');
  
    service.getStatus().subscribe(([]) => {

      expect(console.log).toHaveBeenCalledWith('Datos transformados:', transformedData);
      done();
    });
  
    expect(socketSpy.emit).toHaveBeenCalledWith('canCreate', service.getName());
  });
});