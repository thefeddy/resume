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

    const sounds = {
        light: 'luke-wont.mp3',
        dark: 'vader-lack.mp3'
    }

    const content = () => (
        <>
            <div className="jerb">

                <h1>August 2011 - Now</h1>
                <span>Senior UI Engineer</span>
                <h2>X Studios, Inc.</h2>

                <p>
                    Helped clients build and launch digital products across the full stack. Projects range from
                    standard web applications to complex hardware-integrated systems, including <a href="https://www.thetouratnbcstudios.com/" target="_blank" rel="noopener noreferrer">NBC's Show Control suite</a>, Boeing's interactive Livery Designer, and the integrated Halloween Horror Nights companion experience within the Universal Orlando mobile app.
                </p>
            </div>
        </>
    );

    const aside = () => (
        <>
            <p>My Job(s)</p>
        </>
    );

    return (
        <>
            <ResumeSection id="exp" title={`Experience`} icon={`fa-light ${icon}`} content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}
