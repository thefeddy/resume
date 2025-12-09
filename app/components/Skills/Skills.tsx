/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';
export default function Skills(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';
    const content = () => (
        <>
            <div className="skills">
                <ul>
                    <li><h1>Coding</h1></li>
                    <li><p>JAVASCRIPT</p></li>
                    <li><p>TYPESCRIPT</p></li>
                    <li><p>CSS</p></li>
                    <li><p>MQTT</p></li>
                    <li><p>NODE</p></li>
                    <li><p>EXPRESS</p></li>
                </ul>
                <ul>
                    <li><h1>FRMWRKs</h1></li>
                    <li><p>VUE3</p></li>
                    <li><p>REACT</p></li>
                    <li><p>NESTJS</p></li>
                    <li><p>ELECTRON</p></li>
                </ul>
                <ul>
                    <li><h1>DBs</h1></li>
                    <li><p>MySQL</p></li>
                    <li><p>POSTGRESQL</p></li>
                    <li><p>MONGODB</p></li>
                </ul>
                <ul>
                    <li><h1>Tools</h1></li>
                    <li><p>Visual Studio Code</p></li>
                    <li><p><a href="https://www.postman.com/" target="_blank">POSTMAN</a></p></li>
                    <li><p><a href="https://tableplus.com/" target="_blank">TABLEPLUS</a></p></li>
                    <li><p><a href="https://podman.io/" target="_blank">PODMAN</a></p></li>
                    <li><p>GIT</p></li>
                    <li><p><a href="https://clonezilla.org/" target="_blank">CLONEZILLA</a></p></li>
                    <li><p>FIGMA</p></li>
                </ul>
            </div >
        </>
    );

    const aside = () => (
        <>
            <p>My Skill(s)</p>
        </>
    );

    return (
        <>
            <ResumeSection id="skills" title={`Skills`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}