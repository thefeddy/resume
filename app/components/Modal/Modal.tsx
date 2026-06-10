/* SCSS */
import './styles.scss';

/* React */
import type { ReactNode, JSX } from 'react';

/* Libs */
import clsx from 'clsx';
import type { Content } from '~/type/content.type';
import parse from 'html-react-parser';

/* Interace */
interface ModalProps {
    content: Content;
    isOpen: boolean;
    type: string;
    onClose: () => void;
}

export default function Modal({ content, isOpen, onClose, type }: ModalProps): JSX.Element | null {
    return (
        <div className={clsx('modal', type, { 'open': isOpen })}>
            <div className="body">
                <div className="header">
                    <h1>{content?.title}</h1>
                    <button className="close" onClick={onClose}>x</button>
                </div>
                <div className="modal-content">
                    {type == 'project' ? (
                        <>
                            {content?.youtube && (
                                <div className="video">
                                    <iframe
                                        className="yt-embed"
                                        src={`https://www.youtube.com/embed/${content.youtube}`} title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </div>
                            )}
                            <div>{content?.body ? parse(content.body) : null}</div>
                        </>
                    ) : (

                        <>{content?.photo && <img src={content?.photo} alt="" />}</>
                    )}
                </div>
                {type == 'project' && (
                    <div className="images">
                        {/* {projects.map((project, index) => (
                            <></>
                        )} */}
                    </div>
                )}
            </div>

        </div >
    );
}
