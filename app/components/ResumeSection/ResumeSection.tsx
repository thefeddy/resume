/* SCSS */
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import './styles.scss'

/* Inteface */

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import type { JSX, ReactNode } from 'react'

type ResumeSectionProps = {
    id: string;
    title: string;
    icon: any;
    aside: ReactNode;
    content: ReactNode;
}

export default function ResumeSection({ id, title, icon, aside, content }: ResumeSectionProps): JSX.Element {

    return (
        <>
            <section id={id}>
                <div className="container">
                    <div className="title">
                        <h1>{title}</h1>
                        <FontAwesomeIcon icon={icon} size="xl" style={{ color: "#272727", }} />
                    </div>
                    <div className="content">
                        <aside>
                            {aside}
                        </aside>
                        <div className="right">
                            {content}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
