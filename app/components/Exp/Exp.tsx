/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';
/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { JSX } from 'react'

import React from 'react';

export default function Exp(): JSX.Element {

    const content = () => (
        <>
            <p>Original from South Jersey, go all Philly teams!, moved to Orlando, FL in 2011 where I
                graduated from Full Sail Uni, and shortly after started work for X Studios(). Where
                I have worked since. I have worked on various projects over the year, some which are listed
                in Projects.
            </p>
        </>
    );

    const aside = () => (
        <>
            <p>Feel free to look at some of the projects I have worked on over the years.</p>
        </>
    );

    return (
        <>
            <ResumeSection id="exp" title={`Experience`} icon="fa-light fa-messages" content={content()} aside={aside()} />
        </>
    );
}
