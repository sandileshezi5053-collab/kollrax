import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.kollrax.com';

const defaultMeta = {
  title: 'KollraX | Microsoft 365 Security, Management & Support',
  description:
    'KollraX helps organisations secure, manage, migrate, optimise, and support Microsoft 365 with specialist guidance, practical governance, and proactive security support.',
  image: `${SITE_URL}/og-image.svg`,
};

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'KollraX | Microsoft 365 Security, Management & Support',
    description:
      'KollraX helps organisations secure, manage, migrate, optimise, and support Microsoft 365 with specialist guidance, practical governance, and proactive security support.',
  },
  '/about': {
    title: 'About KollraX | Microsoft 365 Specialists',
    description:
      'Learn how KollraX helps organisations strengthen Microsoft 365 administration, security, and operational maturity with clear, practical support.',
  },
  '/our-approach': {
    title: 'Our Approach to Microsoft 365 Management & Security | KollraX',
    description:
      'Discover how KollraX assesses, secures, manages, and optimises Microsoft 365 through a clear, transparent approach built around business needs.',
  },
  '/services/managed-microsoft-365-support': {
    title: 'Managed Microsoft 365 Support | KollraX',
    description:
      'KollraX provides proactive Microsoft 365 support for organisations that want expert day-to-day administration, security, and optimisation without hiring a full internal team.',
  },
  '/services/microsoft-365-security': {
    title: 'Microsoft 365 Security Services | KollraX',
    description:
      'KollraX helps organisations strengthen Microsoft 365 security through identity controls, tenant review, configuration hardening, security assessments, and ongoing monitoring.',
  },
  '/services/microsoft-365-migration': {
    title: 'Microsoft 365 Migration Services | KollraX',
    description:
      'Plan and deliver a smooth Microsoft 365 migration with KollraX, including migration design, execution, security checks, and post-migration support.',
  },
  '/microsoft-365-migration': {
    title: 'Microsoft 365 Migration Services | KollraX',
    description:
      'Plan and deliver a smooth Microsoft 365 migration with KollraX, including migration design, execution, security checks, and post-migration support.',
  },
  '/services/identity-access-management': {
    title: 'Identity & Access Management | Microsoft 365 | KollraX',
    description:
      'KollraX helps organisations improve identity security with Microsoft Entra ID, MFA, Conditional Access, privileged access review, and access governance.',
  },
  '/identity-access-management': {
    title: 'Identity & Access Management | Microsoft 365 | KollraX',
    description:
      'KollraX helps organisations improve identity security with Microsoft Entra ID, MFA, Conditional Access, privileged access review, and access governance.',
  },
  '/services/microsoft-teams-collaboration': {
    title: 'Microsoft Teams Collaboration Services | KollraX',
    description:
      'KollraX helps organisations configure, secure, and optimise Microsoft Teams for messaging, meetings, collaboration, governance, and modern workplace productivity.',
  },
  '/microsoft-teams-collaboration': {
    title: 'Microsoft Teams Collaboration Services | KollraX',
    description:
      'KollraX helps organisations configure, secure, and optimise Microsoft Teams for messaging, meetings, collaboration, governance, and modern workplace productivity.',
  },
  '/services/microsoft-365-optimisation': {
    title: 'Microsoft 365 Optimisation Services | KollraX',
    description:
      'KollraX helps organisations optimise Microsoft 365 licensing, security, administration, collaboration, and governance to improve value and reduce risk.',
  },
  '/microsoft-365-optimisation': {
    title: 'Microsoft 365 Optimisation Services | KollraX',
    description:
      'KollraX helps organisations optimise Microsoft 365 licensing, security, administration, collaboration, and governance to improve value and reduce risk.',
  },
  '/services/microsoft-365-assessment': {
    title: 'Microsoft 365 Assessment | KollraX',
    description:
      'Start with a Microsoft 365 assessment to understand your environment, identify configuration risks, and plan improvements based on business priorities.',
  },
  '/microsoft-365-assessment': {
    title: 'Microsoft 365 Assessment | KollraX',
    description:
      'Start with a Microsoft 365 assessment to understand your environment, identify configuration risks, and plan improvements based on business priorities.',
  },
  '/contact': {
    title: 'Contact KollraX | Microsoft 365 Management & Security',
    description:
      'Contact KollraX to discuss Microsoft 365 assessments, security, migration, optimisation, identity, and ongoing support for your organisation.',
  },
  '/talk-to-microsoft-365-specialist': {
    title: 'Talk to a Microsoft 365 Specialist | KollraX',
    description:
      'Discuss your Microsoft 365 needs with a KollraX specialist and explore practical options for security, management, optimization, and support.',
  },
};

function setMetaTag(type: 'name' | 'property', attribute: string, content: string) {
  const selector = `${type}="${attribute}"`;
  let tag = document.head.querySelector(`meta[${selector}]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(type, attribute);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
  let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname || '/';
    const page = routeMeta[pathname] ?? {
      title: 'Page Not Found | KollraX',
      description: defaultMeta.description,
    };
    const fullUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    document.title = page.title;
    setMetaTag('name', 'description', page.description);
    setMetaTag('name', 'robots', 'index,follow,max-image-preview:large');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'KollraX');
    setMetaTag('property', 'og:title', page.title);
    setMetaTag('property', 'og:description', page.description);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', `${SITE_URL}/og-image.svg`);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', page.title);
    setMetaTag('name', 'twitter:description', page.description);
    setMetaTag('name', 'twitter:image', `${SITE_URL}/og-image.svg`);
    setCanonicalLink(fullUrl);
  }, [location.pathname]);

  return null;
}
