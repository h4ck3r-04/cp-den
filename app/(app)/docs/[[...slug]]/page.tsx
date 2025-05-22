import { DocsContent } from "./_components/docs-content";
import { notFound } from "next/navigation";
import { Content } from "@/types/content";

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug?.join("/");
  const modulePath = `@/content/${slugPath}`;
  console.log(modulePath);

  try {
    const contentModule = await import(modulePath);
    const content: Content = contentModule.default;

    return <DocsContent {...content} />
  } catch (error) {
    console.log(error);
    return notFound()
  }
}