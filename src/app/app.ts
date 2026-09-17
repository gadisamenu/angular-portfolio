import { Component } from '@angular/core';

import { MenuBar } from './layout/menu-bar/menu-bar';
import { PortfolioNav } from './layout/portfolio-nav/portfolio-nav';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { FinderWindow } from './windows/finder-window/finder-window';
import { ProjectWindow } from './windows/project-window/project-window';
import { ResumeWindow } from './windows/resume-window/resume-window';
import { AvailabilityWindow } from './windows/availability-window/availability-window';
import { PreviewWindow } from './windows/preview-window/preview-window';
import { PortfolioStateService } from './core/portfolio-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuBar,
    PortfolioNav,
    Hero,
    About,
    Projects,
    Skills,
    Experience,
    Contact,
    FinderWindow,
    ProjectWindow,
    ResumeWindow,
    AvailabilityWindow,
    PreviewWindow,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(readonly state: PortfolioStateService) {}
}
