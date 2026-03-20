import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty username', () => {
    expect(component.username).toBe('');
  });

  it('should have three games in the list', () => {
    expect(component.games.length).toBe(3);
    expect(component.games[0].name).toBe('The Legend of Zelda: Breath of the Wild');
    expect(component.games[1].name).toBe('Super Mario Odyssey');
    expect(component.games[2].name).toBe('Minecraft');
  });

  it('should emit game name when fav is called', () => {
    spyOn(component.addFavoriteEvent, 'emit');

    component.fav('The Legend of Zelda: Breath of the Wild');

    expect(component.addFavoriteEvent.emit).toHaveBeenCalledWith('The Legend of Zelda: Breath of the Wild');
  });

  it('should accept username input', () => {
    component.username = 'testUser';
    fixture.detectChanges();

    expect(component.username).toBe('testUser');
  });
});
