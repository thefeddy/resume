/* SCSS */
import './styles.scss'

import projects from '~/assets/json/projects.json';


/* Components */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Inteface */
type ModalState = {
    embedId: any;
    title: string;
    body: any;
};

/* Libs */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

/* React */
import { useRef, useState, type JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';
import Modal from '../Modal/Modal';


export default function Projects(): JSX.Element {
    const [projectType, setProjectType] = useState<string>('all');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalState>({
        body: '',
        embedId: '',
        title: ''
    });
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
        if (projects[index]?.content) {
            setIsModalOpen(true);
            setModalContent({
                body: projects[index]?.content,
                title: projects[index].title,
                embedId: projects[index].youtube

            });
        }
    }

    const content = () => (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                title={modalContent.title}
                embedId={modalContent.embedId}
                body={modalContent.body}
            />
            <div className="menu">
                <div className="type" onClick={() => menu('all')}>All</div>
                <div className="type" onClick={() => menu('js')}><FontAwesomeIcon icon="fa-brands fa-js" /></div>
                <div className="type" onClick={() => menu('react')}><FontAwesomeIcon icon="fa-brands fa-react" /></div>
                <div className="type" onClick={() => menu('vue')}><FontAwesomeIcon icon="fa-brands fa-vuejs" /></div>
                <div className="type" onClick={() => menu('angular')}><FontAwesomeIcon icon="fa-brands fa-angular" /></div>
                <div className="type" onClick={() => menu('wordpress')}><FontAwesomeIcon icon="fa-brands fa-wordpress" /></div>
                <div className="type" onClick={() => menu('node')}><FontAwesomeIcon icon="fa-brands fa-node-js" /></div>
            </div>
            <div className={clsx('projects', projectType)} >
                {projects.map((project, index) => (
                    <div
                        className={clsx('project', { 'has': project.content })}
                        key={index}
                        data-type={project?.type}
                        onClick={() => modal(index)}>
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

    const onClose = () => {
        setIsModalOpen(false)

    }

    return (
        <>

            <ResumeSection id="projects" title={`Work Projects`} icon={`fa-light ${icon}`} content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}
