/* SCSS */
import './styles.scss'

/* Component */
import ResumeSection from '~/components/ResumeSection/ResumeSection';
import Modal from '../Modal/Modal';

/* Inteface */
import type { ModalState } from '../Modal/type/modal';

/* React */
import { useState, type JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';
import type { Content } from '~/type/content.type';

export default function Extra(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<Content>({
        title: 'image',
        type: '',
        photo: ''
    });

    const modal = (title: string, photo: string) => {

        setIsModalOpen(true);
        setModalContent({
            type: 'image',
            title,
            photo
        });

    }

    const onClose = () => {
        setIsModalOpen(false)

    }

    const sounds = {
        light: 'lightsaber.mp3',
        dark: 'lightsaber.mp3'
    }
    const content = () => (
        <>
            <p>When I am not coding, I am usually face first into a book, which I am currently reading
                <b>
                    <a href="https://www.amazon.com/dp/B08BX5D4LC?binding=hardcover&ref=dbs_m_mng_rwt_sft_thcv_tkin" rel="noopener noreferrer" target="_blank"> Dungeon Crawler Carl</a>
                </b>, and if I am not doing that I'm either playing video games or 3D printing something.
            </p>
            <p>While Javascript/Typescript may be my prefered coding language, I am always learning new ones. I am currently teaching myself Go + Beego.</p>
            <div className="photos">
                <div className="photo" onClick={() => modal('P1S Printer', '/assets/img/personal/3d-printer.jpg')} >
                    <img src="/assets/img/personal/3d-printer.jpg" alt="Bambu P1S 3D Printer" loading="lazy" />
                </div>
                <div className="photo" onClick={() => modal('My Computah', '/assets/img/personal/computer.jpg')} >
                    <img src="/assets/img/personal/computer.jpg" alt="My machine" loading="lazy" />
                </div>
                <div className="photo" onClick={() => modal('Just some books', '/assets/img/personal/books.jpg')} >
                    <img src="/assets/img/personal/books.jpg" alt="Some of my books" loading="lazy" />
                </div>
            </div>
        </>
    );

    const aside = () => (
        <>
            <p>You kept going?!? Fine, here's a little more about myself</p>
        </>
    );

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                content={modalContent}
                type="image"
            />
            <ResumeSection id="extra" title={`Extra, Extra!`} icon={`fa-light ${icon}`} content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}