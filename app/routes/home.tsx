import type { Route } from "./+types/home";
import { HomeScreen } from "~/screens/home/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'David Friedrich Resume' },
        { name: 'description', content: 'David Friedrich Typescript Developer' },
    ];
}

export default function Home() {
    return <HomeScreen />;
}
