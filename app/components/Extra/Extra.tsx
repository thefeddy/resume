/* SCSS */
import './styles.scss'

/* Inteface */
import ResumeSection from '~/components/ResumeSection/ResumeSection';

/* Libs */

/* React */
import type { JSX } from 'react'
import { useGlobal } from '~/states/useGlobal';

export default function Extra(): JSX.Element {
    const { darkmode } = useGlobal();
    const icon = (darkmode) ? 'fa-swords-laser' : 'fa-sword-laser';

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
            <p>While Javascript/Typescript may be my prefered coding language, I am learning new ones. I am currently teaching myself Go + Beego.</p>
            <div className="photos">
                <a href="/assets/img/personal/3d-printer.jpg" target="_blank">
                    <img src="/assets/img/personal/3d-printer.jpg" alt="Bambu P1S 3D Printer" />
                </a>
                <a href="/assets/img/personal/computer.jpg" target="_blank">
                    <img src="/assets/img/personal/computer.jpg" alt="My machine" />
                </a>
                <a href="/assets/img/personal/books.jpg" target="_blank">
                    <img src="/assets/img/personal/books.jpg" alt="Some of my books" />
                </a>
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
            <ResumeSection id="extra" title={`Extra, Extra!`} icon={`fa-light ${icon}`} content={content()} aside={aside()} sounds={sounds} />
        </>
    );
}