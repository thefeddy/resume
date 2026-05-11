
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


export function HomeScreen() {
    return (
        <>
            <main>
                <ResumeHeader />
                <Intro />
                <Exp />
                <Projects />
                <Skills />
                <Extra />
                <Footer />
            </main>
        </>
    );
}

