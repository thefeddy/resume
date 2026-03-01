/* SCSS */
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import './styles.scss'

/* Inteface */

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import { useCallback, useEffect, useRef, useState, type JSX, type ReactNode } from 'react'

import { useGlobal } from '~/states/useGlobal';

type ResumeSoundProps = {
    light: string,
    dark: string
}

type ResumeSectionProps = {
    id: string;
    title: string;
    icon: any;
    aside: ReactNode;
    content: ReactNode;
    sounds: ResumeSoundProps;
}

export default function ResumeSection({ id, title, icon, aside, content, sounds }: ResumeSectionProps): JSX.Element {
    const { darkmode } = useGlobal();
    const [isPlaying, setIsPlaying] = useState(false);

    const play = (sounds: ResumeSoundProps) => {
        const soundPath = !darkmode ? `light/${sounds.light}` : `dark/${sounds.dark}`;
        const url = `/assets/sounds/${soundPath}`;
        const audio = new Audio(url);

        audio.addEventListener('canplaythrough', () => {
            setIsPlaying(true);
            if (isPlaying) return;

            audio.currentTime = 0;
            audio.play().catch(error => {
                console.error("Playback blocked by browser policy:", error);
            });
        }, { once: true });

        audio.onended = () => {
            setIsPlaying(false);
        };
    };

    return (
        <>
            <section id={id}>
                <div className="container">
                    <div className="title">
                        <h1>{title}</h1>
                        <FontAwesomeIcon icon={icon} size="2xl" style={{ color: "#272727", }} onClick={() => play(sounds)} />
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
