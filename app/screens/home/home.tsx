
/* Styles */
import './styles.scss';

/* Components */
import ResumeHeader from '~/components/Header/Header';
import Intro from '~/components/Intro/Intro';
import Projects from '~/components/Projects/Projects';
import Exp from '~/components/Exp/Exp';
import SplashScreen from '~/components/SplashScreen/SplashScreen';
import Skills from '~/components/Skills/Skills';
import Footer from '~/components/Footer/Footer';

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* React */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useGlobal } from '~/states/useGlobal';

/* Libs */
import mqtt from 'mqtt';
import { clsx } from 'clsx';




export function HomeScreen() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const { darkmode, setDarkmode } = useGlobal();
    if (id) {
        console.log(id)
    } else {
        console.log("ask if they want the MQTT EXP :^ }")
    }


    const [client, setClient] = useState<mqtt.MqttClient | null>(null);
    const [connectStatus, setConnectStatus] = useState('Disconnected');
    const [section, setSection] = useState('intro');

    const OPTIONS = {
        clientId:
            'dfriedrich_mqtt_client_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 1000,
    };


    return (
        <>
            {/* <SplashScreen /> */}
            <main className={clsx({ 'dark-mode': darkmode, section })}>
                <ResumeHeader status={connectStatus} />
                <Intro />
                <Exp />
                <Projects />
                <Skills />
                <Footer />
            </main>
        </>
    );
}

