/* SCSS */
import './styles.scss';

/* React */
import type { ReactNode, JSX } from 'react';

/* Libs */
import clsx from 'clsx';

/* Interace */
interface ModalProps {
    body?: ReactNode;
    title?: string;
    embedId?: string;
    isOpen: boolean;
    type: string;
    onClose: () => void;
    image?: string;
}

export default function Modal({ body, title, isOpen, onClose, embedId, type, image }: ModalProps): JSX.Element | null {
    console.log(image);
    return (
        <div className={clsx('modal', type, { 'open': isOpen })}>
            <div className="body">
                <div className="header">
                    <h1>{title}</h1>
                    <button className="close" onClick={onClose}>x</button>
                </div>
                <div className="modal-content">
                    {/* TODO:: redo this area */}
                    {type == 'project' ? (
                        <>
                            {embedId && (
                                <div className="video">
                                    <iframe
                                        className="yt-embed"
                                        src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </div>
                            )}
                            <div dangerouslySetInnerHTML={{ __html: body }}></div>
                        </>
                    ) : (
                        <><img src={image} /></>
                    )}


                </div>
            </div>
        </div >
    );
}
