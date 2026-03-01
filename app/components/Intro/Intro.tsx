/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { JSX } from 'react'

import React, { useEffect, useState } from 'react';

export default function Intro(): JSX.Element {
    const [years, setYears] = useState<number>();
    const NAMES = [
        'David Friedrich', 'David / Dave', 'Friedrich', 'Feddy',
    ]
    const sounds = {
        light: 'hello-there.mp3',
        dark: 'hello-there-og.mp3'
    }
    useEffect(() => {
        const calculateYearDifference = (start: Date, end: Date) => {
            let years = end.getFullYear() - start.getFullYear();

            const hasHadAnniversaryThisYear =
                end.getMonth() > start.getMonth() ||
                (end.getMonth() === start.getMonth() && end.getDate() >= start.getDate());

            if (!hasHadAnniversaryThisYear) {
                years--;
            }

            return Math.max(0, years);
        }

        const startDate = new Date('2011-08-10');
        const endDate = new Date();

        setYears(calculateYearDifference(startDate, endDate));
    }, []);


    const content = () => (
        <>
            <p><b>Hi. Yes. Hello,</b>
                My name is
                <span className="select" title="Just some names I am known by">
                    <select>
                        {NAMES.map(name => (
                            <option key={name}>{name}</option>
                        ))}
                    </select>
                    <i className="fa-light fa-caret-down"></i>
                </span>, <br />
                I am a Senior Javascript Developer currently at <a href="https://xstudios.com"
                    target="_target" title="Current Company">X Studios</a> and looking for new work.
            </p>

            <p>Original from South Jersey, <span className="birds">GO BIRDS</span>!, moved to Orlando, FL in 2008 where I
                graduated from Full Sail Uni, and shortly after started work for X Studios (for {years} years).
            </p>

            <p></p>
        </>
    );

    const aside = () => (
        <>
            <p>package.json</p>
            <div className="packagedotjson">
                <pre>
                    <code>
                        {`{\n "name": "David Friedrich",\n "title": "Developer", \n "lng": "[\'Javascript\',\'Typescript\']", \n "exp": "${years}", \n "frmwrks": "[\'React\',\'Vue3\']" \n}`}
                    </code>
                </pre>
            </div>
        </>
    );

    return (
        <>
            <ResumeSection id="about" title={`Hello! : }`} icon="fa-light fa-messages" content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}
