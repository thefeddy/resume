/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */


/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Exp(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-user-sith' : 'fa-jedi';

    const content = () => (
        <>
            <div className="jerb">

                <h1>August 2011 - Now</h1>
                <span>Full Stack Typescript Developer</span>
                <h2>X Studios, Inc.</h2>

                <p>Helped clients build websites and applications from discovery to launch. Ranging from basic WordPress sites to complex
                    Show Control systems for <a href="https://www.thetouratnbcstudios.com/" target="_blank">NBC's The Tour at NBC Studios</a>,
                    Boeing's Livery Designer Selfie App or
                    Universal's Halloween Horror Nights Mobile App.</p>
            </div>
        </>
    );

    const aside = () => (
        <>
            <p>My Jerb(s)</p>
        </>
    );

    return (
        <>
            <ResumeSection id="exp" title={`Experience`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}
