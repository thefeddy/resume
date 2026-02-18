import "./styles/app.scss";

/* Components */

import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError, useParams
} from "react-router-dom";

import type { Route } from "./+types/root";
import { GlobalProvider } from "./states/GlobalContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { all } from '@awesome.me/kit-e8a7262d37/icons';
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
                <script src="https://kit.fontawesome.com/e8a7262d37.js" crossOrigin="anonymous"></script>
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

export function ErrorBoundary() {
    const error = useRouteError();
    const params = useParams();

    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "Excuse you, what are you doing here?"
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <>
            <main id="four-oh-four">
                <h1>{message}</h1>
                <p>{details}</p>
                <a href="/">Go back!</a>
            </main>
        </>
    );
}