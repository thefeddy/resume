/* SCSS */
import './styles.scss'

/* Inteface */

/* Libs */

/* React */
import type { JSX } from 'react'

import React from 'react';

export default function SplashScreen(): JSX.Element {


    return (
        <>
            <div className="splash-screen">
                <div className="splash-card">
                    <h1>Welcome</h1>
                    <span title="I am showing my age with this : |">[ This site is best viewed in 1920x1080 ]</span>
                    <button>Okay</button>
                </div>
            </div>
        </>
    );
}
