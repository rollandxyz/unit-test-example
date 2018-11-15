import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


import { TestTwoComponent } from './test-two.component';
import { StarWarService } from 'src/app/services/star-war.service';
import { Film } from 'src/app/models/film';




/**
 * Dpendency injection allows components and other building blocks
 * to receive services by declaring dependencies on them
 * using constructor parameters.
 */
describe('TestTwoComponent', () => {
  let component: TestTwoComponent;
  let fixture: ComponentFixture<TestTwoComponent>;

  const starFilmURL = 'https://swapi.co/api/films/';
  // this is our fake response for testing
  const mockResponse = {
    count: 3,
    next: null,
    results: [
      new Film('A New Hope', 4, 'It is a period of civil war', 'George Lucas', 'Gary Kurtz, Rick McCallum', '1977-05-25'),
      new Film('Attack of the Clones', 2, 'There is unrest in the Galactic', 'George Lucas', 'Rick McCallum', '2002-05-16'),
      new Film('The Phantom Menace', 1, 'Turmoil has engulfed the', 'George Lucas', 'Rick McCallum', '1999-05-19')
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        StarWarService,
        // !! to create a new provider for Http
        // which instantiates the class with a different ConnectionBackend
        // ensures that no real http requests are performed,
        // also provides APIs to subscribe to opened connections and send mock responses
        { provide: XHRBackend, useClass: MockBackend }
      ],
      declarations: [ TestTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // to test if our StarService returns an Observable<FilmResult>
  describe('deprecated getFilms()', () => {
    it('should return an Observable<FilmResult>',

      // injects service dependencies
      // and takes a list of provider tokens and a function,
      // it returns a function in which the test code is executed
      inject([StarWarService, XHRBackend], (starService, mockBackend) => {

        // a way to fake a response that is emitted when we subscribe to the Observable
        // subscribe to http connections
        mockBackend.connections.subscribe((connection) => {
          // send mock responses when someone subscribes to http call
          connection.mockRespond(new Response(new ResponseOptions({
            // fake the http response.
            body: JSON.stringify(mockResponse)
          })));
        });

        // call getFilms() and subscribe to the Observable it returns
        // test if the emitted value is the one we expect
        starService.getFilms().subscribe((filmResult) => {
          const films: Film[] = filmResult.results;
          expect(films.length).toBe(4);
          expect(films[0].title).toEqual('A New Hope');
          expect(films[1].title).toEqual('Attack of the Clones');
          expect(films[2].title).toEqual('The Phantom Menace');
        });
      })
    );
  });


  // to test if our StarService returns an Observable<FilmResult>
  describe('getFilms()', () => {
    it('expects service to fetch data with proper sorting',
      inject([HttpTestingController, StarWarService],
        (httpMock: HttpTestingController, starService: StarWarService) => {

        // We call the service
        starService.getFilms().subscribe(data => {
          const films: Film[] = data.results;
          expect(films[0].release_date).toBe('1977-05-25');
          expect(films.length).toBe(3);
        });

        // call getFilms() and subscribe to the Observable it returns
        // test if the emitted value is the one we expect
        starService.getFilms().subscribe((filmResult) => {
          const films: Film[] = filmResult.results;
          expect(films.length).toBe(4);
          expect(films[0].title).toEqual('A New Hope');
          expect(films[1].title).toEqual('Attack of the Clones');
          expect(films[2].title).toEqual('The Phantom Menace');
        });

        /*
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne(starFilmURL);
        expect(req.request.method).toEqual('GET');

        // Then we set the fake data to be returned by the mock
        req.flush(mockResponse);
        httpMock.verify();
        */
      })
    );
  });
});
