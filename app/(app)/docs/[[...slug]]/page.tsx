import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsContent } from './_components/docs-content';
import { Content } from '@/types/content';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

async function getContentFromSlug(slugPath: string): Promise<Content | null> {
  try {
    const contentModule = await import(`@/content/${slugPath}`);
    return contentModule.default as Content;
  } catch (err) {
    console.error('Failed to load content:', slugPath, err);
    return null;
  }
}

export async function generateMetadata(
  { params, }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug?.join('/') || 'introduction';
  const content = await getContentFromSlug(slugPath);

  if (!content) {
    return {
      title: 'Page Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: content.title,
    openGraph: {
      images: ['/docs-default-image.jpg', ...previousImages],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug?.join('/') || 'introduction';
  const content = await getContentFromSlug(slugPath);

  if (!content) return notFound();

  return <DocsContent {...content} />;
}
