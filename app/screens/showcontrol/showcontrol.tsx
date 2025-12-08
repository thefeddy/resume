
/* Styles */
import './styles.scss';

/* Components */
import ResumeHeader from '~/components/Header/Header';
import Intro from '~/components/Intro/Intro';
import Projects from '~/components/Projects/Projects';
import Exp from '~/components/Exp/Exp';

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* React */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useGlobal } from '~/states/useGlobal';

/* Libs */
import mqtt from 'mqtt';
import { clsx } from 'clsx';


export function ShowControlScreen() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

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

    // MQTT -- probably move this 
    useEffect(() => {
        console.log('Connecting to MQTT...');

        const mqttClient = mqtt.connect(
            'mqtt://test.mosquitto.org:8080/mqtt',
            OPTIONS
        );

        setClient(mqttClient);
        setConnectStatus('Connecting');
        return () => {
            console.log('Disconnecting MQTT...');
            mqttClient.unsubscribe(
                `feddy/#`
            );
            mqttClient.end();
        };
    }, []);

    useEffect(() => {
        if (!client) return;

        client.on('connect', () => {
            console.log('✅ Connected');
            setConnectStatus('Connected');

            client.subscribe(
                `feddy/#`,
                (err) => {
                    console.log(err);
                }
            );
        });

        client.on('error', (err) => {
            console.error('Connection error: ', err);
            setConnectStatus('Error');
        });

        client.on('reconnect', () => {
            console.log('🔄 Reconnecting...');
            setConnectStatus('Reconnecting');
        });

        client.on('message', (topic, message) => {

            const msg = JSON.parse(message.toString());

            // switch to switch later?
            if (topic === 'feddy/section') {
                setSection(msg.section);
            }

            console.log(message.toString())
        });

        return () => {
            console.log('Cleaning up listeners...');
            client.removeAllListeners();
        };
    }, [client]);

    return (
        <>
            <main>
                SHOW CONTROL
            </main>
        </>
    );
}

