/* SCSS */
import './styles.scss'

/* React */
import type { JSX } from 'react'

export default function Footer(): JSX.Element {
    const copyright = new Date().getFullYear().toString();

    return (
        <>
            <footer data-copyright={copyright}>
                <span className="build-tag">v2.0.0-PROD</span>
            </footer>
        </>
    );
}
