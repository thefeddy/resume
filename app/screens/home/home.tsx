
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
import TopoBackground from '~/components/TopoBG/TopoBG';


export function HomeScreen() {
    return (
        <>
            <TopoBackground />
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

