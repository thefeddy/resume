/* SCSS */
import './styles.scss'

import projects from '~/assets/json/projects.json';

/* Components */
import ResumeSection from '~/components/ResumeSection/ResumeSection';
import Modal from '../Modal/Modal';


/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

/* React */
import { useState, type JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';
import type { Content } from '~/type/content.type';

const MENU_CONFIG = [
    {
        name: 'all',
        icon: ''
    },
    {
        name: 'js',
        icon: 'fa-brands fa-js'
    },
    {
        name: 'react',
        icon: 'fa-brands fa-react'
    },
    {
        name: 'vue',
        icon: 'fa-brands fa-vuejs'
    },
    {
        name: 'angular',
        icon: 'fa-brands fa-angular'
    },
    {
        name: 'wordpress',
        icon: 'fa-brands fa-wordpress'
    },
    {
        name: 'node',
        icon: 'fa-brands fa-node-js'
    }
]

export default function Projects(): JSX.Element {
    const [projectType, setProjectType] = useState<string>('all');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<Content>();

    const { darkmode } = useGlobal();

    const icon = (darkmode) ? 'fa-starfighter-twin-ion-engine' : 'fa-starfighter';

    const sounds = {
        light: 'x-wing.mp3',
        dark: 'tie-fighter.mp3'
    }

    const menu = (type: string) => {
        setProjectType(type);
    }

    const modal = (index: number) => {
        if (projects[index]?.body) {

            setIsModalOpen(true);
            setModalContent(projects[index]);
        }
    }

    const content = () => (
        <>
            <div className="menu">
                {MENU_CONFIG.map((item) => {
                    const isActive = projectType === item.name;
                    return (
                        <div className={clsx('type tooltip --vertical sunken', { active: isActive })}
                            onClick={() => menu(item.name)}
                            key={item.name}
                            data-tooltip={item.name}
                            aria-label={item.name}
                            aria-pressed={isActive}
                        >
                            {item.icon != '' ? (
                                <FontAwesomeIcon icon={item.icon} />
                            ) :
                                (
                                    <>{item.name}</>
                                )
                            }
                        </div>)
                })}
            </div>

            <div className={clsx('projects', projectType)} >
                {projects.map((project, index) => (
                    <div
                        className={clsx('project', { 'has': project.body })}
                        key={index}
                        data-type={project?.type}
                        onClick={() => modal(index)}>
                        <div className="photo">
                            {project.photo && (<img src={`/assets/img/${project.photo}`} loading="lazy" />)}
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

    const onClose = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                content={modalContent}
                type="project"
            />
            <ResumeSection id="projects" title={`Work Projects`} icon={`fa-light ${icon}`} content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}
