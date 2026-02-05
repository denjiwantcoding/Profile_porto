export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: 'DenjiDevSite',
  title: 'Portfolio Saya',
  description: 'Im a junior web developer and informatic engineering student',
  author: 'Deny',
  email: 'denyaryseptianl@gmail.com',
  phone: 'Privacy',
  location: 'Sidoarjo, Indonesia',
  social: {
    github: 'https://github.com/denjiwantcoding',
    linkedin: 'https://linkedin.com/in/denyaryseptialazuardi',
    twitter: 'https://twitter.com/username',
    instagram: 'https://instagram.com/denyaryy_'
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]
};
