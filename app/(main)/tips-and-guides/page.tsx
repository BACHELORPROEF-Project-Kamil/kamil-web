import GuideHero from "@/app/components/GuideHero";
import GuideSteps from "@/app/components/GuideSteps";
import GuidesExplorer from "@/app/components/GuidesExplorer";
import { getAllGuides } from "@/app/lib/guideLoader";

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
