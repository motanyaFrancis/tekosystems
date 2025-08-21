// app/(MainLayout)/legal/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { legalPagesContent, LegalPageKey } from '@/lib/legalPagesContent';
import { PageHeader } from '@/components/PageHeader';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

// Type as Promise for compatibility with Next.js 15's expected shape
interface PageProps {
    params: Promise<{ slug: string }>;
}

// Utility type guard
function isLegalPageKey(key: string): key is LegalPageKey {
    return key in legalPagesContent;
}

// Generate static paths for all legal pages
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return Object.keys(legalPagesContent).map((slug) => ({ slug }));
}

// Generate metadata per page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    if (!isLegalPageKey(slug)) {
        return {
            title: 'Page Not Found',
            description: 'The legal page you are looking for does not exist.',
        };
    }

    const pageData = legalPagesContent[slug];
    const preview = pageData.content.slice(0, 150);

    return {
        title: `${pageData.title} - Legal Info`,
        description: preview,
        openGraph: {
            title: pageData.title,
            description: preview,
            url: `https://teko.africa/legal/${slug}`,
        },
        twitter: {
            card: 'summary',
            title: pageData.title,
            description: preview,
        },
        alternates: {
            canonical: `https://teko.africa/legal/${slug}`,
        },
    };
}

// Render page
export default async function LegalPage({ params }: PageProps) {
    const { slug } = await params;

    if (!isLegalPageKey(slug)) {
        return notFound();
    }

    const pageData = legalPagesContent[slug];

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Legal', href: `/legal/${slug}#footer` },
        { name: pageData.title, href: `/legal/${slug}` },
    ];

    return (
        <>
            <PageHeader
                title={pageData.title}
                subtitle="Legal Information"
                backgroundImageSrc="/images/header.jpg"
                breadcrumbs={breadcrumbs}
            />
            <main className="pt-4 bg-gray-50 text-gray-900">
                <section
                    className="
                        max-w-5xl mx-auto px-6 py-10
                        prose prose-lg prose-blue
                        prose-h2:text-blue-700 prose-h2:font-bold
                        prose-h3:text-red-600 prose-h3:font-semibold
                        prose-li:marker:text-blue-500
                        prose-strong:text-gray-800
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                    "
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
                        {pageData.content}
                    </ReactMarkdown>
                </section>
            </main>
        </>
    );
}
