import { getGuideBySlug, getAllGuides } from "@/app/lib/guideLoader";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "@/app/components/Button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function GuideDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        notFound();
    }

    const allGuides = getAllGuides();
    const relatedGuides = allGuides
        .filter((g) => g.slug !== slug && g.category === guide.category)
        .slice(0, 2);

    const baseUrl = "http://localhost:3000";
    const fullUrl = encodeURIComponent(`${baseUrl}/tips-and-guides/gids/${slug}`);
    const shareMessage = encodeURIComponent("Check deze gids: ");
    const whatsappLink = `https://wa.me/?text=${shareMessage}${fullUrl}`;

    const toc = guide.content
        .split("\n")
        .filter((line) => line.startsWith("## "))
        .map((line) => line.replace("## ", "").trim());

    return (
        <article className="w-full bg-white">
            <header className="bg-accent-background py-16 px-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 text-sm font-bold mb-6">
                        <span className="bg-accent-green text-white px-3 py-1 rounded-full uppercase tracking-wider">
                            {guide.category}
                        </span>
                        <span className="text-body-green opacity-60">{guide.date}</span>
                    </div>
                    <h1 className="max-w-4xl">{guide.title}</h1>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <aside className="lg:col-span-3 space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-green opacity-40">Inhoud</h4>
                            <nav className="flex flex-col gap-4">
                                {toc.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`#section-${index + 1}`}
                                        className="text-sm font-bold text-accent-orange hover:opacity-80 transition-opacity"
                                    >
                                        {index + 1}. {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-accent-background rounded-[32px] p-8 space-y-6">
                            <p className="text-sm font-bold text-accent-green">
                                Kamil zorgt ervoor dat u veilig kan surfen.
                            </p>
                            <Button href="#" className="w-full py-3 text-base">
                                Installeer nu
                            </Button>
                        </div>
                    </aside>

                    <main className="lg:col-span-6">
                        <div className="prose prose-lg max-w-none prose-headings:text-title-green prose-p:text-body-green prose-p:font-body prose-li:text-body-green prose-li:font-body">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h2: ({ node, ...props }) => {
                                        const text = props.children?.toString() || "";
                                        const match = text.match(/^(\d+)\./);
                                        const id = match ? `section-${match[1]}` : undefined;
                                        return <h2 id={id} className="text-3xl font-bold mt-12 mb-6" {...props} />;
                                    },
                                    p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-8 space-y-2" {...props} />,
                                    blockquote: ({ node, ...props }) => (
                                        <div className="bg-[#FFF8D1] border border-[#FFEA7D] rounded-2xl p-8 my-10 relative overflow-hidden">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-xl">💡</span>
                                                <h4 className="font-bold text-title-green m-0">Tip van Kamil</h4>
                                            </div>
                                            <div className="italic text-body-green leading-relaxed">
                                                {props.children}
                                            </div>
                                        </div>
                                    ),
                                }}
                            >
                                {guide.content}
                            </ReactMarkdown>
                        </div>

                        <div className="mt-12 pt-8 border-t border-accent-background flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-accent-green/40">
                            <span>Deel dit:</span>
                            <Link href={whatsappLink} target="_blank" className="hover:text-accent-orange transition-colors">
                                WhatsApp
                            </Link>
                        </div>
                    </main>

                    <aside className="lg:col-span-3 space-y-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent-green opacity-40">Gerelateerd</h4>
                        <div className="space-y-8">
                            {relatedGuides.map((g) => (
                                <Link key={g.slug} href={`/tips-and-guides/gids/${g.slug}`} className="block group">
                                    <h5 className="font-bold text-title-green group-hover:text-accent-orange transition-colors mb-2">
                                        {g.title}
                                    </h5>
                                    <p className="text-sm text-body-green opacity-60 line-clamp-3">
                                        {g.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>

            <section className="bg-accent-background py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl">Wilt u dat Kamil dit voor u doet?</h2>
                    <p className="text-lg text-body-green opacity-80 max-w-2xl mx-auto font-body">
                        U hoeft geen expert te worden om veilig te zijn. Kamil herkent deze signalen sneller dan het menselijk oog.
                    </p>
                    <Button href="/tips-and-guides" variant="orange">
                        Naar de Tips & Gids
                    </Button>
                </div>
            </section>
        </article>
    );
}
