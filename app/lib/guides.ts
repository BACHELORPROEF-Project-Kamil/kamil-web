import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDirectory = path.join(process.cwd(), "content/guides");

export interface GuideData {
    slug: string;
    title: string;
    description: string;
    category: string;
    icon?: string;
    date: string;
    content: string;
}

export function getAllGuides(): GuideData[] {
    if (!fs.existsSync(guidesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuidesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(guidesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            slug,
            content: matterResult.content,
            ...(matterResult.data as { title: string; description: string; category: string; icon?: string; date: string }),
        };
    });

    return allGuidesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
