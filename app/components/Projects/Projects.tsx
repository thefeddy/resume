/* SCSS */
import './styles.scss'

import projects from '~/assets/json/projects.json';

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* React */
import { useRef, useState, type JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';
import clsx from 'clsx';

export default function Projects(): JSX.Element {
    const [projectType, setProjectType] = useState<string>('all');
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-starfighter-twin-ion-engine' : 'fa-starfighter';


    const menu = (type: string) => {
        setProjectType(type);
    }

    const content = () => (
        <>
            <div className="menu">
                <div className="type" onClick={() => menu('all')}>All</div>
                <div className="type" onClick={() => menu('js')}><FontAwesomeIcon icon="fa-brands fa-js" /></div>
                <div className="type" onClick={() => menu('react')}><FontAwesomeIcon icon="fa-brands fa-react" /></div>
                <div className="type" onClick={() => menu('vue')}><FontAwesomeIcon icon="fa-brands fa-vuejs" /></div>
                <div className="type" onClick={() => menu('angular')}><FontAwesomeIcon icon="fa-brands fa-angular" /></div>
                <div className="type" onClick={() => menu('wordpress')}><FontAwesomeIcon icon="fa-brands fa-wordpress" /></div>
                <div className="type" onClick={() => menu('node')}><FontAwesomeIcon icon="fa-brands fa-node-js" /></div>
            </div>
            <div className={clsx('projects', projectType)}>
                {projects.map((project, index) => (
                    <div className="project" key={index} data-type={project?.type}>
                        <div className="photo">
                            {project.photo && (<img src={`/assets/img/${project.photo}`} />)}
                        </div>
                        <div className="details">
                            <p>{project.title}</p>
                            <span>{project.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

    const aside = () => (
        <>
            <p>Feel free to look at some of the projects I have worked on over the years.</p>
            <em>More Projects Details will be added later on.</em>
        </>
    );

    return (
        <>
            <ResumeSection id="projects" title={`Work Projects`} icon={`fa-light ${icon}`} content={content()} aside={aside()} />
        </>
    );
}
