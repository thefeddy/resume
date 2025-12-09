/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */


/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Footer(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';
    const copyright = new Date().getFullYear().toString();

    return (
        <>
            <footer data-copyright={copyright}></footer>
        </>
    );
}
