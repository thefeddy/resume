/* SCSS */
import './styles.scss'


/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function ResumeHeader(): JSX.Element {
    const { darkmode, toggleDarkMode, role } = useGlobal();

    const changeMode = () => {
        toggleDarkMode();
    }

    return (
        <>
            <nav>

                <ul>
                    <li onClick={changeMode} title="Dark Mode">
                        {(darkmode) ? (<FontAwesomeIcon icon="fa-duotone fa-solid fa-moon-stars" />) : (<FontAwesomeIcon icon="fa-duotone fa-solid fa-sun-bright" />)}
                    </li>
                    <li>
                        <a href="https://www.instagram.com/fe.dd.y/" title="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/david-friedrich-558140b/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
                    <li> <a href="https://github.com/thefeddy/" title="GitHub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
                    <li> <a href="https://github.com/thefeddy/resume" title="Source Code" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-duotone fa-solid fa-code" /></a></li>
                    <li><a href="/resume/David_Friedrich_Senior_UI_Engineer_Resume.pdf" title="Resume" target="_blank"><FontAwesomeIcon icon="fa-light fa-file-user" /></a></li>
                </ul>
            </nav>

            <header>
                <div className="container">
                    <div className="name">
                        <h1>David<br /> Friedrich</h1>
                        <h2>{role}</h2>
                    </div>
                    <ul className="information">
                        <li className="looking"><FontAwesomeIcon icon="fa-light fa-chart-user" size="lg" /><span>Looking For Work</span></li>
                        <li>
                            <FontAwesomeIcon icon="fa-light fa-envelope" size="lg" />
                            <span><a
                                href="mailto:thefeddy@gmail.com">thefeddy@gmail.com</a></span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-light fa-location-crosshairs" size="lg" /><span>Orlando, FL <strong>(Willing to relocate)</strong></span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
