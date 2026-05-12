"use client";

import { useState, useMemo } from "react";
import GuideCard from "./GuideCard";
import Pagination from "./Pagination";
import { GuideData } from "../lib/guides";

const categories = ["ALLES", "BASIS", "BANKZAKEN", "OVERHEID", "HULP", "PAKKETJES", "WACHTWOORD"];
const POSTS_PER_PAGE = 6;

export default function GuidesExplorer({ initialGuides }: { initialGuides: GuideData[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("ALLES");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredGuides = useMemo(() => {
        return initialGuides.filter(guide => {
            const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                guide.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "ALLES" || guide.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [initialGuides, searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredGuides.length / POSTS_PER_PAGE);
    const paginatedGuides = useMemo(() => {
        return filteredGuides.slice(
            (currentPage - 1) * POSTS_PER_PAGE,
            currentPage * POSTS_PER_PAGE
        );
    }, [filteredGuides, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        document.getElementById("raad-van-kamil")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="raad-van-kamil" className="py-24 px-6 bg-white border-t border-accent-background">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <h2>De raad van Kamil</h2>
                    
                    <div className="relative max-w-md w-full">
                        <input 
                            type="text" 
                            placeholder="Ik ben opzoek naar..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-accent-background rounded-full py-4 px-8 pr-14 text-body-green focus:outline-none focus:ring-2 focus:ring-accent-green/10 font-body"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                            <span>→</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                                selectedCategory === category 
                                ? "bg-accent-green text-white" 
                                : "bg-accent-background text-accent-green hover:bg-accent-green/5"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {paginatedGuides.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedGuides.map((guide) => (
                            <GuideCard key={guide.slug} guide={guide} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-body-green opacity-60 italic font-body">Geen gidsen gevonden die voldoen aan je zoekopdracht.</p>
                    </div>
                )}

                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            </div>
        </section>
    );
}
