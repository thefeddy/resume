/* SCSS */

import './styles.scss'

/* Inteface */
import type { HeaderProps } from './types';

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-e8a7262d37/icons';

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function ResumeHeader({ status }: HeaderProps): JSX.Element {
    const { darkmode, setDarkmode } = useGlobal();
    const changeMode = () => {
        setDarkmode(!darkmode);
    }
    return (
        <>
            <nav>
                <div className="mqtt">
                    <p>MQTT is <span className={status}>{status}</span></p>
                </div>
                <ul>
                    <li onClick={changeMode}>
                        {(darkmode) ? (<FontAwesomeIcon icon="fa-duotone fa-solid fa-moon-stars" style={{ color: "#ffffff", }} />) : (<FontAwesomeIcon icon="fa-duotone fa-solid fa-sun-bright" style={{ color: "#ffffff", }} />)}
                    </li>
                    <li>
                        <a href="https://www.instagram.com/fe.dd.y/" className="instagram"><FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#ffffff", }} /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/david-friedrich-558140b/" className="linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#ffffff", }} /></a></li>
                    <li> <a href="https://github.com/thefeddy/" className="github"><FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "#ffffff", }} /></a></li>
                </ul>
            </nav>

            <header>
                <div className="container">
                    <div className="name">
                        <h1>David<br /> Friedrich</h1>
                        <h2>Typescript Developer</h2>
                    </div>
                    <ul className="information">
                        <li className="looking"><FontAwesomeIcon icon="fa-light fa-chart-user" size="lg" /><span>Looking For Work</span></li>
                        <li>
                            <FontAwesomeIcon icon="fa-light fa-envelope" size="lg" />
                            <span><a
                                href="mailto:thefeddy@gmail.com">thefeddy@gmail.com</a></span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="fa-light fa-location-crosshairs" size="lg" /><span>Orlando, FL</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
