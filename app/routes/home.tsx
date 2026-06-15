import type { Route } from "./+types/home";
import { HomeScreen } from "~/screens/home/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'David Friedrich | Senior UI Engineer' },
        { name: 'description', content: 'Senior UI & Systems Engineer with over 14 years of experience specializing in React, TypeScript, and Vue. Expert in building high-performance interactive interfaces, manifest-driven media systems, and location-based kiosk environments with real-world hardware integration. Explore a portfolio of mission-critical engineering solutions crafted for global brands.' },
    ];
}

export default function Home() {
    return <HomeScreen />;
}
