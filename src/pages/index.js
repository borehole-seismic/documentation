import clsx from 'clsx';
import React, {useEffect} from 'react';
import { useHistory } from '@docusaurus/router';
import LoginPage from './login';
import { Redirect } from '@docusaurus/router'; 
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p >It is the central repository for all essential information related to our company.
             Here, we bring together a comprehensive collection of documents and resources, offering quick and seamless access to the insights you need. 
             Dive into a well-organized repository that reflects our commitment to clarity, accessibility, and excellence in documentation.</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const history = useHistory();
  useEffect(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    // return <LoginPage />
    history.push('/documentation/login'); 
    }
  }, [history]);
  
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

