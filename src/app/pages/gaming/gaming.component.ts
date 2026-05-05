import { Component } from '@angular/core';

@Component({
  selector: 'app-gaming',
  standalone: true,
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.css'
})
export class GamingComponent {
  games = [
    { title: 'The Witcher 3', genre: 'RPG', hours: '250h', icon: '&#9876;' },
    { title: 'Cyberpunk 2077', genre: 'Action RPG', hours: '120h', icon: '&#128187;' },
    { title: 'Hollow Knight', genre: 'Metroidvania', hours: '80h', icon: '&#128030;' },
    { title: 'Valorant', genre: 'FPS', hours: '500h+', icon: '&#127919;' }
  ];
}
