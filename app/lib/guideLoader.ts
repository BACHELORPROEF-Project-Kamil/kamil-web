import fs from "fs";
import path from "path";

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

function parseFrontmatter(fileContents: string) {
	const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
	const match = fileContents.match(frontmatterRegex);

	if (!match) {
		return { data: {}, content: fileContents };
	}

	const yamlBlock = match[1];
	const content = match[2];
	const data: any = {};

	yamlBlock.split("\n").forEach((line) => {
		const colonIndex = line.indexOf(":");
		if (colonIndex > -1) {
			const key = line.slice(0, colonIndex).trim();
			let value = line.slice(colonIndex + 1).trim();
			
			if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
				value = value.slice(1, -1);
			}
			
			data[key] = value;
		}
	});

	return { data, content };
}

export function getGuideBySlug(slug: string): GuideData | null {
	const fullPath = path.join(guidesDirectory, `${slug}.md`);
	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = parseFrontmatter(fileContents);

	return {
		slug,
		content,
		title: data.title || "Geen titel",
		description: data.description || "",
		category: data.category || "BASIS",
		icon: data.icon,
		date: data.date || new Date().toISOString(),
	};
}

export function getAllGuides(): GuideData[] {
	if (!fs.existsSync(guidesDirectory)) {
		return [];
	}

	const fileNames = fs.readdirSync(guidesDirectory);
	const allGuidesData = fileNames
		.filter((fileName) => fileName.endsWith(".md"))
		.map((fileName) => {
			const slug = fileName.replace(/\.md$/, "");
			const fullPath = path.join(guidesDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = parseFrontmatter(fileContents);

			return {
				slug,
				content,
				title: data.title || "Geen titel",
				description: data.description || "",
				category: data.category || "BASIS",
				icon: data.icon,
				date: data.date || new Date().toISOString(),
			};
		});

	return allGuidesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
