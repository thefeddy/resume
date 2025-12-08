/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';
/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { JSX } from 'react'

import React from 'react';

export default function Projects(): JSX.Element {

    const content = () => (
        <>
            <p>
                Personal
                Just some personal projects </p>
        </>
    );

    const aside = () => (
        <>
            <p>Feel free to look at some of the projects I have worked on over the years.</p>
        </>
    );

    return (
        <>
            <ResumeSection id="projects" title={`Projects`} icon="fa-light fa-messages" content={content()} aside={aside()} />
        </>
    );
}
