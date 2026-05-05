import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  tracks = [
    { title: 'Cyberpunk City', artist: 'Synthwave Master', duration: '3:45', cover: '&#127927;' },
    { title: 'Coding in the Dark', artist: 'Lo-Fi Chill', duration: '2:30', cover: '&#127911;' },
    { title: 'Neon Lights', artist: 'Retro Electro', duration: '4:15', cover: '&#127928;' }
  ];
}
