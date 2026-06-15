import { type LoaderFunctionArgs, redirect } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const path = url.pathname.toLowerCase();


    const profileMap: Record<string, string> = {
        "/linkedin": "https://www.linkedin.com/in/david-friedrich-558140b/",
        "/git": "https://github.com/thefeddy/",
    };

    const externalTarget = profileMap[path];

    if (externalTarget) {

        return redirect(externalTarget, 302);
    }

    return redirect("/", 302);
};