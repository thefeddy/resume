/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Projects(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-starfighter-twin-ion-engine' : 'fa-starfighter';

    const content = () => (
        <>
            <div className="menu">
                <ul>
                    <li>React</li>
                    <li>Vue3</li>
                    <li>Angular</li>
                    <li>WordPress</li>
                    <li>JavaScript/TypeScript</li>
                </ul>
            </div>
            <div className="project">
                <p>Lively Designer Selfie Station</p>
                <p>Boeing</p>
                <span>2024</span>
            </div>
            <div className="project">
                <p>Interactive Health Experiences</p>
                <p>Advent Health</p>
                <span>2024 - 2025</span>
            </div>
            <div className="project">
                <p>Halloween Horror Nights</p>
                <p>Universal Orlando</p>
                <span>2018 - 2022</span>
            </div>
            <div className="project">
                <p>Mardi Gras Carnival Games</p>
                <p>Universal Orlando</p>
                <span>2021</span>
            </div>
            <div className="project">
                <p>The Tour Show Control</p>
                <p>NBC Universal</p>
                <span>2022</span>
            </div>
            <div className="project">
                <p>UniSign</p>
                <p>Universal</p>
                <span>2024 - </span>
            </div>
            <div className="project">
                <p>Halo Outpost Discovery WordPress</p>
                <p>343 & Herschend Family Entertainment</p>
                <span>2019</span>
            </div>
            <div className="project">
                <p>Inclusion Experiences</p>
                <p>USTA</p>
                <span>2022</span>
            </div>
            <div className="project">
                <p>SATCOM App</p>
                <p>Cobham / AAQ / IP Access</p>
                <span>2015, 2017, 2020</span>
            </div>
            <div className="project">
                <p>Attractions Show Control + Leaderboards</p>
                <p>Face Amusement</p>
                <span>2020</span>
            </div>

        </>
    );

    const aside = () => (
        <>
            <p>Feel free to look at some of the projects I have worked on over the years.</p>
        </>
    );

    return (
        <>
            <ResumeSection id="projects" title={`Work Projects`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}
