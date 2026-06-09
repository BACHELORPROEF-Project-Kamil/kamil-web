import Link from "next/link";
import { GuideData } from "../lib/guideLoader";

export default function GuideCard({ guide }: Readonly<{ guide: GuideData }>) {
    return (
        <Link
            href={`/tips-and-guides/gids/${guide.slug}`}
            className="bg-white rounded-[32px] p-8 border border-accent-background hover:shadow-lg transition-shadow flex flex-col items-start gap-4 h-full no-underline"
        >
            <div className="w-12 h-12 bg-accent-background rounded-xl flex items-center justify-center text-2xl">
                {guide.icon || "✉️"}
            </div>
            <span className="bg-accent-background text-accent-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {guide.category}
            </span>
            <h3 className="text-xl font-bold text-title-green">{guide.title}</h3>
            <p className="text-body-green text-sm leading-relaxed font-body">
                {guide.description}
            </p>
            <span className="text-accent-orange font-bold text-sm mt-auto flex items-center gap-2">
                Lees meer <span>→</span>
            </span>
        </Link>
    );
}
