import GuideHero from "../components/GuideHero";
import GuideSteps from "../components/GuideSteps";
import GuidesExplorer from "../components/GuidesExplorer";
import { getAllGuides } from "../lib/guides";

export default async function TipsAndGuidesPage() {
    const guides = getAllGuides();

    return (
        <div className="w-full bg-white">
            <GuideHero />
            <GuideSteps />
            <GuidesExplorer initialGuides={guides} />
        </div>
    );
}
