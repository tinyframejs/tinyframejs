import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { FaBook, FaCode, FaChartBar, FaDownload } from 'react-icons/fa';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const today = new Date().toLocaleDateString('en-US', {year:'numeric', month:'short', day:'numeric'});
  
  return (
    <div className="homepage-header">
      <div className="container">
        <div className="title-with-logo">
          <img src="img/tiny.png" alt="TinyFrameJS Logo" className="header-logo" />
          <h1>{siteConfig.title}</h1>
        </div>
        <p className="subtitle">{siteConfig.tagline}</p>
        <p className="version">Date: {today} • Version: 1.0.0</p>

        <p>
          Download documentation:&nbsp;
          <Link to="/docs/api/README">HTML</Link>
        </p>
        <p>
          Previous versions: see&nbsp;
          <Link to="https://github.com/tinyframejs/tinyframejs/releases">GitHub releases</Link>.
        </p>

        <div className="links">
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            <Translate>Getting Started</Translate>
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/api/README">
            <Translate>API Reference</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({icon: Icon, title, description, link}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon size={40} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div style={{textAlign: 'center', marginTop: '1rem'}}>
        <Link className="button button--primary button--sm" to={link}>
          <Translate>Learn More</Translate>
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <div className="homepage-features-container">
      <div className="homepage-features">
        <FeatureCard
          icon={FaBook}
          title={<Translate>Getting Started</Translate>}
          description={<Translate>New to TinyFrameJS? Check out the getting started guides. They contain an introduction to TinyFrameJS' main concepts and links to additional tutorials.</Translate>}
          link="/docs/getting-started"
        />
        <FeatureCard
          icon={FaCode}
          title={<Translate>API Reference</Translate>}
          description={<Translate>The reference guide contains a detailed description of the TinyFrameJS API. The reference describes how the methods work and which parameters can be used.</Translate>}
          link="/docs/api/README"
        />
        <FeatureCard
          icon={FaChartBar}
          title={<Translate>Developer Guide</Translate>}
          description={<Translate>Saw a typo in the documentation? Want to improve existing functionalities? The contributing guidelines will guide you through the process of improving TinyFrameJS.</Translate>}
          link="https://github.com/tinyframejs/tinyframejs/blob/main/CONTRIBUTING.md"
        />
        <FeatureCard
          icon={FaDownload}
          title={<Translate>Binary Installers</Translate>}
          description={<Translate>Download the latest version of TinyFrameJS and its dependencies as pre-built packages for various platforms and package managers.</Translate>}
          link="https://github.com/tinyframejs/tinyframejs/releases"
        />
      </div>
    </div>
  );
}

function HomepageContent() {
  return (
    <div className="homepage-section">
      <div className="container">
        <h2><Translate>What is TinyFrameJS?</Translate></h2>
        <p>
          <Translate>
            TinyFrameJS is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for JavaScript. It is designed to make working with structured data fast, easy, and expressive.
          </Translate>
        </p>
        <p>
          <Translate>
            TinyFrameJS is a fundamental high-level building block for doing practical, real-world data analysis in JavaScript. It is built on top of native JavaScript arrays and objects, making it fast and efficient.
          </Translate>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description={siteConfig.tagline}>
      <main className="main-wrapper">
        <HomepageHeader />
        <HomepageContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
