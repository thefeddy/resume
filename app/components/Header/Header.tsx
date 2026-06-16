/* SCSS */
import './styles.scss'


/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';

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
                    <li
                        onClick={changeMode}
                        className="sunken tooltip --horizontal"
                        data-tooltip={darkmode ? 'Light Mode' : 'Dark Mode'}
                        aria-label={darkmode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        role="button"
                        tabIndex={0}

                    >
                        {(darkmode) ? (
                            <FontAwesomeIcon icon={"fa-duotone fa-solid fa-sun-bright" as IconProp} />
                        ) : (
                            <FontAwesomeIcon icon={"fa-duotone fa-solid fa-moon-stars" as IconProp} />
                        )}
                    </li>
                    <li
                        className="sunken tooltip --horizontal"
                        data-tooltip="Instagram"
                        role="button"
                        tabIndex={0}
                        aria-label="Visit David's Instagram profile"
                    >
                        <a href="https://www.instagram.com/fe.dd.y/" title="Instagram" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={"fa-brands fa-instagram" as IconProp} />
                        </a>
                    </li>
                    <li
                        className="sunken tooltip --horizontal"
                        data-tooltip="LinkedIn Profile"
                        role="button"
                        tabIndex={0}
                        aria-label="Visit David's LinkedIn profile"
                    >
                        <a href="https://www.linkedin.com/in/david-friedrich-558140b/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={"fa-brands fa-linkedin" as IconProp} />
                        </a>
                    </li>
                    <li
                        className="sunken tooltip --horizontal"
                        data-tooltip="Github"
                        role="button"
                        tabIndex={0}
                        aria-label="Visit David's Github Profile"
                    >
                        <a href="https://github.com/thefeddy/" title="GitHub" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={"fa-brands fa-github" as IconProp} />
                        </a>
                    </li>
                    <li
                        className="sunken tooltip --horizontal"
                        data-tooltip="Resume Repo"
                        role="button"
                        tabIndex={0}
                        aria-label="View the source code for this site"
                    >
                        <a href="https://github.com/thefeddy/resume" title="Source Code" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={"fa-duotone fa-solid fa-code" as IconProp} />
                        </a>
                    </li>
                    <li
                        className="sunken tooltip --horizontal"
                        data-tooltip="Resume"
                        role="button"
                        tabIndex={0}
                        aria-label="Download David's most recent Resume"
                    >
                        <a href="/resume/David_Friedrich_Senior_UI_Engineer_Resume.pdf" title="Resume" target="_blank">
                            <FontAwesomeIcon icon={"fa-light fa-file-user" as IconProp} />
                        </a>
                    </li>
                </ul>
            </nav>

            <header>
                <div className="container">
                    <div className="name">
                        <h1>David<br /> Friedrich</h1>
                        <h2>{role}</h2>
                    </div>
                    <ul className="information">
                        <li className="looking">
                            <FontAwesomeIcon icon={"fa-light fa-chart-user" as IconProp} size="lg" />
                            <span>Open to Work</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={"fa-light fa-envelope" as IconProp} size="lg" />
                            <span><a
                                href="mailto:thefeddy@gmail.com">thefeddy@gmail.com</a></span>
                        </li>
                        <li className="tooltip --vertical" data-tooltip="preferred Locations : Philly, NYC, LA, Seattle, San Diego.">
                            <FontAwesomeIcon icon={"fa-light fa-location-crosshairs" as IconProp} size="lg" />
                            <span>Orlando, FL <strong>(Willing to relocate)</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
