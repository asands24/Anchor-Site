import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ChevronRight, BookOpen, Shield, Code, Server, HelpCircle, FileText, Settings } from 'lucide-react';

// Import markdown content
import overviewMd from '../content/knowledge/overview.md?raw';
import howItWorksMd from '../content/knowledge/how-it-works.md?raw';
import deploymentMd from '../content/knowledge/deployment.md?raw';
import integrationsMd from '../content/knowledge/integrations.md?raw';
import securityMd from '../content/knowledge/security.md?raw';
import customizationMd from '../content/knowledge/customization.md?raw';
import faqMd from '../content/knowledge/faq.md?raw';

const contentMap: Record<string, string> = {
    'overview': overviewMd,
    'how-it-works': howItWorksMd,
    'deployment': deploymentMd,
    'integrations': integrationsMd,
    'security': securityMd,
    'customization': customizationMd,
    'faq': faqMd,
};

const navigation = [
    { name: 'Overview', slug: 'overview', icon: BookOpen },
    { name: 'How It Works', slug: 'how-it-works', icon: FileText },
    { name: 'Deployment', slug: 'deployment', icon: Server },
    { name: 'Integrations', slug: 'integrations', icon: Code },
    { name: 'Security & Compliance', slug: 'security', icon: Shield },
    { name: 'Customization', slug: 'customization', icon: Settings },
    { name: 'F.A.Q.', slug: 'faq', icon: HelpCircle },
];

export function KnowledgeBase() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!slug) {
            navigate('/knowledge/overview', { replace: true });
            return;
        }

        const md = contentMap[slug];
        if (md) {
            setContent(md);
            window.scrollTo(0, 0);
        } else {
            // Fallback for 404
            setContent('# 404 \n\nPage not found.');
        }
    }, [slug, navigate]);

    const currentSection = navigation.find(n => n.slug === slug)?.name || 'Docs';
    const canonicalPath = slug ? `/knowledge/${slug}` : '/knowledge/overview';

    return (
        <div className="min-h-screen flex flex-col bg-anchor-blue-900 text-anchor-white font-sans selection:bg-anchor-blue-500 selection:text-anchor-blue-900">
            <SEO
                title={`${currentSection} - Anchor Knowledge Base`}
                description={`Anchor Knowledge Base documentation for ${currentSection}. Learn how to deploy, secure, and customize Anchor.`}
                url={canonicalPath}
            />

            <Navbar />

            <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <nav className="sticky top-28 space-y-1">
                            <div className="pb-4 mb-4 border-b border-anchor-blue-700">
                                <h2 className="text-sm font-semibold text-anchor-blue-500 uppercase tracking-wider">
                                    Knowledge Base
                                </h2>
                            </div>
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={`/knowledge/${item.slug}`}
                                    className={({ isActive }) =>
                                        `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${isActive
                                            ? 'bg-anchor-blue-800 text-anchor-500'
                                            : 'text-anchor-slate hover:bg-anchor-blue-800 hover:text-anchor-white'
                                        }`
                                    }
                                >
                                    <item.icon
                                        className="flex-shrink-0 -ml-1 mr-3 h-5 w-5 opacity-70 group-hover:opacity-100"
                                        aria-hidden="true"
                                    />
                                    <span className="truncate">{item.name}</span>
                                    {slug === item.slug && (
                                        <ChevronRight className="ml-auto h-4 w-4 text-anchor-blue-500" />
                                    )}
                                </NavLink>
                            ))}
                        </nav>
                    </aside>

                    {/* Mobile Navigation (Dropdown-ish or Horizontal List) */}
                    <div className="lg:hidden mb-8">
                        <label htmlFor="mobile-nav" className="sr-only">Select a section</label>
                        <select
                            id="mobile-nav"
                            className="block w-full rounded-md border-anchor-blue-600 bg-anchor-blue-800 text-anchor-white focus:border-anchor-500 focus:ring-anchor-500"
                            value={slug}
                            onChange={(e) => navigate(`/knowledge/${e.target.value}`)}
                        >
                            {navigation.map((item) => (
                                <option key={item.slug} value={item.slug}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <div className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-a:text-anchor-500 hover:prose-a:text-anchor-white prose-code:text-anchor-500/90 prose-pre:bg-anchor-blue-800 prose-pre:border prose-pre:border-anchor-blue-700">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </div>

                        <div className="mt-12 pt-8 border-t border-anchor-blue-700 flex justify-between text-sm text-anchor-slate">
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                            <a href="mailto:support@anchor.com" className="hover:text-anchor-500 transition-colors">
                                Report an issue
                            </a>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
