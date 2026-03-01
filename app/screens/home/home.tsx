
/* Styles */
import './styles.scss';

/* Components */
import ResumeHeader from '~/components/Header/Header';
import Intro from '~/components/Intro/Intro';
import Projects from '~/components/Projects/Projects';
import Exp from '~/components/Exp/Exp';
import Skills from '~/components/Skills/Skills';
import Extra from '~/components/Extra/Extra';
import Footer from '~/components/Footer/Footer';

/* Font Awesome */


/* React */
import { useGlobal } from '~/states/useGlobal';

/* Libs */
import { clsx } from 'clsx';


export function HomeScreen() {
    const { darkmode, setDarkmode } = useGlobal();

    return (
        <>
            <main className={clsx({ 'dark-mode': darkmode })}>
                <ResumeHeader />
                <Intro />
                <Exp />
                <Projects />
                <Skills />
                {/* <Extra /> */}
                <Footer />
            </main>
        </>
    );
}

