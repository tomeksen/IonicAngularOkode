import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewPeliculaPageRoutingModule } from './view-pelicula-routing.module';

import { ViewPeliculaPage } from './view-pelicula.page';

describe('ViewMessagePage', () => {
  let component: ViewPeliculaPage;
  let fixture: ComponentFixture<ViewPeliculaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPeliculaPage ],
      imports: [IonicModule.forRoot(), ViewPeliculaPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
