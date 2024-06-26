import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompetencesComponent } from '../Competences/Competences.component';
import { ParcoursComponent } from '../Parcours/Parcours.component';
import { PresentationComponent } from '../Presentation/Presentation.component';
declare function particlesJS(tag_id: any, params: any): any;

@Component({
    selector: 'app-accueil',
    standalone: true,
    imports: [CommonModule, PresentationComponent, ParcoursComponent, CompetencesComponent],
    templateUrl: './Accueil.component.html',
    styleUrl: './Accueil.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilComponent {
    ngOnInit(): void {
        this.loadParticles();
    }

    loadParticles(): void {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 600,
                    },
                },
                color: {
                    value: '#00ff00',
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000',
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
            config_demo: {
                hide_card: false,
                background_color: '#b61924',
                background_image: '',
                background_position: '50% 50%',
                background_repeat: 'no-repeat',
                background_size: 'cover',
                top: 0,
                position: 'absolute',
            },
        });
    }
}
