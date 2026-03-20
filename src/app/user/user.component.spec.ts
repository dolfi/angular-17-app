import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default username "John Doe"', () => {
    expect(component.username).toBe('John Doe');
  });

  it('should have isLoggedIn set to false by default', () => {
    expect(component.isLoggedIn).toBe(false);
  });

  it('should have empty favGames by default', () => {
    expect(component.favGames).toBe('');
  });

  it('should call greet method', () => {
    spyOn(window, 'alert');

    component.greet();

    expect(window.alert).toHaveBeenCalledWith('Hola');
  });

  it('should set favGames when getFavoriteGame is called', () => {
    component.getFavoriteGame('Minecraft');

    expect(component.favGames).toBe('Minecraft');
  });

  it('should toggle isLoggedIn', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();

    expect(component.isLoggedIn).toBe(true);
  });
});
