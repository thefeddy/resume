/* SCSS */
import './styles.scss'

/* React */
import type { JSX } from 'react'

export default function Footer(): JSX.Element {
    const copyright = new Date().getFullYear().toString();

    return (
        <>
            <footer data-copyright={copyright}></footer>
        </>
    );
}
