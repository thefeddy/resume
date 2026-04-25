/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { ChangeEvent, JSX } from 'react'

import { useEffect, useState } from 'react';
import { useGlobal } from '~/states/useGlobal';

export default function Intro(): JSX.Element {
    const { role } = useGlobal();

    const [years, setYears] = useState<number>();
    const NAMES = [
        'David Friedrich', 'David / Dave', 'Feddy',
    ]
    const sounds = {
        light: 'hello-there.mp3',
        dark: 'hello-there-og.mp3'
    }
    const [name, setName] = useState('David Friedrich');

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

    const onNameChange = (event: ChangeEvent<HTMLSelectElement>) => {

        setName(event.currentTarget.value)
    }

    const content = () => (
        <>
            <div>
                <p>
                    <strong>Hi. Yes. Hello,</strong><br />
                    My name is
                    <span className="select">
                        <select aria-label="Select name display preference" onChange={onNameChange}>
                            {NAMES.map(name => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                        <FontAwesomeIcon icon="fa-light fa-caret-down" />
                    </span>,
                    <br />
                    I&rsquo;ve spent the last 14 years at X Studios evolving from a Full Sail grad into a <b>Senior UI Engineer</b> and Lead Architect.
                </p>
            </div>
            <p>I&rsquo;m a South Jersey native with a permanent <span className="birds">"Go Birds!"</span> mentality, now living and working in Orlando. After over a decade <b>({years}y)</b> of building award-winning interfaces, I&rsquo;m ready to bring my expertise to a new team and a fresh set of problems.</p>
        </>
    );

    const aside = () => (
        <>
            <p>package.json</p>
            <div className="packagedotjson">
                <pre>
                    <code>
                        {`{\n "name": "${name}",\n "role": "${role}",\n "exp": "${years}y", \n "libs": [\'React\',\'Vue3\'] \n "tech": [\'TS', \'MQTT\']\n}`}
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
