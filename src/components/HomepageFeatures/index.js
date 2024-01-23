import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Git Hub',
    description: (
      <>
        This explains about using the GitHub efficiently.
      </>
    ),
    link: '/docs/github/intro_git', 
  },
  {
    title: 'Picking Tool',
    description: (
      <>
        This tool simplifies wave analysis, offering a user-friendly interface for accurate wave identification.<br/>
        Click to access the detailed documentation.
      </>
    ),
    link: '/docs/intro', 
  },
  {
    title: 'Portal',
    description: (
      <>
         This explains about the features of our portal
      </>
    ),
    link: '/docs/portal/portal_intro', 
  },

 
];

function Feature({ title, description, link }) {
  return (
    <Link to={link} className={clsx('about__card', styles.featureCard)}> 
      <div className={clsx('about__section', styles.featureSection)}>
        <Heading as="h3" className={styles.featureHeader}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featureBoxContainer)}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} /> // 'props' here contains the 'link' property
          ))}
        </div>
      </div>
    </section>
  );
}
