import { DocsContent } from "./_components/docs-content";
import { notFound } from "next/navigation";
import { Content } from "@/types/content";

async function getContentFromSlug(slugPath: string): Promise<Content | null> {
  try {
    const contentModule = await import(`@/content/${slugPath}`);
    return contentModule.default as Content;
  } catch (err) {
    console.error("Failed to load content:", slugPath, err);
    return null;
  }
}

export default async function DocPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slugPath = params.slug?.length ? params.slug.join("/") : "introduction";
  const content = await getContentFromSlug(slugPath);

  if (!content) return notFound();

  return <DocsContent {...content} />;
}
