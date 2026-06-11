/* SCSS */
import './styles.scss';

/* React */
import { type ReactNode, type JSX, useState, useEffect } from 'react';

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

export default function Modal({ content, onClose, isOpen, type }: ModalProps): JSX.Element | null {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navText = isExpanded ? 'Close Images' : 'View Images';
    const totalImages = content?.images?.length || 0;
    const currentImage = type === 'project' ? content?.images?.[currentIndex] : undefined;

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === 'Escape' || event.key === 'Esc') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const viewImages = () => {
        setIsExpanded(prev => {
            const nextState = !prev;
            return nextState;
        });
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };
    const handleClose = () => {
        setIsExpanded(false);   // Collapse the image wrapper
        setCurrentIndex(0);     // Reset the slider back to the first image
        onClose();
    };

    return (
        <div className={clsx('modal', type, { 'open': isOpen })} onClick={handleClose}>
            <div className="body" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    <h1>{content?.title}</h1>
                    <button className="close sunken" onClick={handleClose}>x</button>
                </div>
                <div className={clsx('modal-content', { expanded: isExpanded })}>
                    {type == 'project' ? (
                        <>
                            {content?.youtube && (
                                <div className="video">
                                    <iframe
                                        className="yt-embed"
                                        src={`https://www.youtube.com/embed/${content.youtube}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            <div>
                                {content?.body ? parse(content.body) : null}
                                {content?.tech && (
                                    <div className="list">
                                        {content.tech.map((item, index) => (
                                            <div className={`tech bg-${item.toLowerCase().replace(/[^a-z0-9]/g, '')}`} key={index}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {totalImages > 0 && (
                                <div className={clsx('images-wrapper', { expanded: isExpanded })}>
                                    <button className="prev" onClick={prevSlide}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>

                                    <img src={`assets/img/${currentImage}`} alt="Gallery" />
                                    <button className="next" onClick={nextSlide}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>{content?.photo && <img src={content?.photo} alt="" />}</>
                    )}
                </div>
            </div>
            {content?.images && content.images.length > 0 && (
                <div className={clsx('modal-nav', { expanded: isExpanded })} onClick={(e) => e.stopPropagation()}>
                    <p>Showing image <strong>{currentIndex + 1}</strong> of <strong>{totalImages}</strong></p>
                    <button onClick={viewImages} className="sunken">{navText}</button>
                </div>
            )}
        </div>
    );
}
