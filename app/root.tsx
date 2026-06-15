import './styles/app.scss';

/* Components */

/* React */
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError, useParams,
    NavLink
} from "react-router-dom";

import type { Route } from "./+types/root";

/* Global */
import { GlobalProvider } from "./states/GlobalContext";
import { useGlobal } from '~/states/useGlobal';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from '@awesome.me/kit-e8a7262d37/icons';
import { useEffect, useState } from 'react';
import { errorQuotes } from './utils/quotes/quotes';
library.add(...all);

export const links: Route.LinksFunction = () => [
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;700;900&display=swap',
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
                <link rel="manifest" href="/fav/site.webmanifest" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <>
        <GlobalProvider>
            <Outlet />
        </GlobalProvider>
    </>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    const [randomQuote, setRandomQuote] = useState(Object.values(errorQuotes)[0]);

    useEffect(() => {
        let statusCode = 'any';

        if (isRouteErrorResponse(error)) {
            statusCode = String(error.status);
        }

        const matchingQuotes = Object.values(errorQuotes).filter(q =>
            q.tags.includes(statusCode) || q.tags.includes('any')
        );

        if (matchingQuotes.length > 0) {
            const selected = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
            setRandomQuote(selected);
        }
    }, [error]);

    if (isRouteErrorResponse(error)) {
        message = String(error.status);
        details =
            error.status === 404
                ? "Uh, excuse me, what are ya doing here?!"
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }


    return (
        <>
            <main id="four-oh-four">
                <h1>{message}</h1>

                <blockquote className="error-quote" style={{ textAlign: 'center' }}>
                    <p>"{randomQuote.quote}"</p>
                    <span>— {randomQuote.description}</span>
                </blockquote>
                <NavLink to="/" ><button className="sunken">Back</button></NavLink>
            </main>
        </>
    );
}