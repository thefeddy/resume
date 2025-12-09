/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */


/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Skills(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';

    const content = () => (
        <>
            <div>
                <p>coding
                    JAVASCRIPT
                    TYPESCRIPT
                    MySQL
                    POSTGRESQL
                    MONGODB
                    CSS - SASS

                    MQTT
                    VUE3
                    REACT
                    ELECTRON
                    NODE
                    NESTJS
                    EXPRESS


                    tools
                    VSC
                    POSTMAN
                    TABLEPLUS
                    PODMAN
                    GIT
                    GITHUB
                    BITBUCKET
                    CLONEZILLA
                    FIGMA

                    Languages
                    ENGLISH
                </p>
            </div>
        </>
    );

    const aside = () => (
        <>
            <p>My Skill(s)</p>
        </>
    );

    return (
        <>
            <ResumeSection id="skills" title={`Skills`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}
