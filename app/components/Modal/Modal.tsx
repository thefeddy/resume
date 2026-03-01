/* SCSS */
import './styles.scss';

/* React */
import type { ReactNode, JSX } from 'react';
import React, { useRef, useEffect } from 'react';


/* Libs */
import clsx from 'clsx';

/* Interace */
interface ModalProps {
    body?: ReactNode;
    title?: string;
    embedId?: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ body, title, isOpen, onClose, embedId }: ModalProps): JSX.Element | null {

    return (
        <div className={clsx('modal', { 'open': isOpen })}>
            <div className="body">
                <div className="header">
                    <h1>{title}</h1>
                    <button className="close" onClick={onClose}>x</button>
                </div>
                <div className="modal-content">
                    {embedId && (
                        <iframe
                            className="yt-embed"

                            src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    )}

                    <div dangerouslySetInnerHTML={{ __html: body }}></div>

                </div>
            </div>
        </div >
    );
}
