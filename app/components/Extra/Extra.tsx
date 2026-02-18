/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Extra(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';

    const content = () => (
        <>
            <div className="photos">

            </div>
        </>
    );

    const aside = () => (
        <>
            <p>You kept going?!? Fine, here's a little more about myself</p>
            <p>When not coding, I am usually face first into video game(s) or 3D Printing.</p>
        </>
    );

    return (
        <>
            <ResumeSection id="extra" title={`Extra, Extra!`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}