import { Injectable, signal } from "@angular/core";

export type WindowType = | 'finder' | 'project' | 'resume' | 'availability';

@Injectable({ providedIn: 'root'})
export class PorfolioStateService {
    readonly activeWindow = signal<WindowType | null>(null);
    readonly selectedProject = signal<Project | null> (null);
    readonly activeSection = signal('home');
    readonly menuOpen = signal<string | null>(null);
    readonly mobileMenuOpen = signal(false);

    openWindow(window: WindowType) {
        this.activeWindow.set(window);
    }

    closeWindow() {
        this.activeWindow.set(null);
        this.selectedProject.set(null);
    }

    openProject(project: Project) {
        this.selectedProject.set(project);
        this.activeWindow.set('project');
    }


    toggleMenu(menu: string) {
        this.menuOpen.update(current =>
        current === menu ? null : menu
        );
    }

    closeMenus() {
        this.menuOpen.set(null);
    }

    setActiveSection(section: string) {
        this.activeSection.set(section);
    }
}

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    demo?: string;
}