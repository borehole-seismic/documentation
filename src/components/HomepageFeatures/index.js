
import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Picking Tool',
    description: (
      <>
        This tool simplifies wave analysis, offering a user-friendly interface for accurate wave identification.<br/>
        Click to access the detailed documentation.
      </>
    ),
  },
];



function Feature({ title, description}) {
  return (
    <Link to='/docs/intro' className={clsx('about__card', styles.featureCard)}>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

