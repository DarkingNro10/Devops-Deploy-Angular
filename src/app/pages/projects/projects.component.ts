import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { title: 'ADRA', description: 'Software de Asistencia', tech: ['Java', 'Spring Boot'], link: '#' },
    { title: 'Cyber UI Library', description: 'A futuristic UI component library built with Angular and CSS Variables.', tech: ['Angular', 'CSS', 'Figma'], link: '#' },
    { title: 'Neon Task Manager', description: 'Productivity app with gamification elements and dark mode.', tech: ['React', 'Node.js', 'MongoDB'], link: '#' },
    { title: 'Retro Engine', description: 'A 2D game engine experimental project for building web games.', tech: ['TypeScript', 'Canvas API'], link: '#' }
  ];
}
