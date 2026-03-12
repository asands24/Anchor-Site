import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME, SITE_URL, toAbsoluteUrl } from '../lib/seo';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    url?: string;
    image?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    name = SITE_NAME,
    type = 'website',
    url = SITE_URL,
    image = DEFAULT_OG_IMAGE_PATH
}) => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = toAbsoluteUrl(url);
    const imageUrl = toAbsoluteUrl(image);

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            <meta name="robots" content="index,follow,max-image-preview:large" />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content={`${SITE_NAME} product overview`} />
            <meta property="og:url" content={canonicalUrl} />

            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
};
