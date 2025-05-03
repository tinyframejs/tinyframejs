import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="homepage.features.easyToUse.title">Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.features.easyToUse.description">
        TinyFrameJS is designed to be simple and intuitive to use.
        Start working with data in just a few lines of code.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.highPerformance.title">High Performance</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="homepage.features.highPerformance.description">
        Optimized for working with large datasets. TinyFrameJS uses
        efficient algorithms and data structures for fast data processing.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.flexibleAPI.title">Flexible API</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.features.flexibleAPI.description">
        Rich set of functions for transforming, filtering, and analyzing data.
        Support for method chaining for elegant and readable code.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
