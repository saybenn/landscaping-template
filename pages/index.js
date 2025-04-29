// Landscaping SPA Template - Entry Point
import Head from 'next/head';
import { siteStructure } from '../siteConfig';
import Layout from '../components/Layout';

// Dynamically import each section component
const sections = {
  Hero: require('../components/Hero').default,
  About: require('../components/About').default,
  Services: require('../components/Services').default,
  Testimonials: require('../components/Testimonials').default,
  Gallery: require('../components/Gallery').default,
  Contact: require('../components/Contact').default,
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Evergreen Landscapes | Landscaping & Outdoor Solutions</title>
        <meta name="description" content="Professional landscaping services that transform your outdoor spaces. Local, reliable, and creative." />
        <meta property="og:title" content="Evergreen Landscapes" />
        <meta property="og:description" content="Transforming outdoor spaces with expert landscaping and design." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
      </Head>
      {siteStructure.map((section, i) => {
        const SectionComponent = sections[section];
        return <SectionComponent key={i} />;
      })}
    </Layout>
  );
}
