import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import { defaults, Pie, HorizontalBar } from 'react-chartjs-2';
import styles from './styles.module.css';

const BLUE = '#2196f3cc';
const BLUE_DARK = '#1565c0cc';
const GREEN = '#009688cc';
const GREEN_DARK = '#00695ccc';
const YELLOW = '#ffc107cc';
const YELLOW_DARK = '#ff8f00cc';

const getIsDarkTheme = (): boolean => {
  try {
    return localStorage.getItem('theme') === 'dark';
  } catch {
    return false;
  }
};

function SurveySP20() {
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme);
  const fontColor = isDarkTheme ? 'white' : '#666666';

  defaults.global.defaultFontColor = fontColor;

  useEffect(() => {
    setInterval(() => {
      try {
        setIsDarkTheme(getIsDarkTheme());
      } catch {}
    }, 50);
  }, []);

  return (
    <Layout title="State of DTI Devs SP2020" description="Developer Survey">
      <header className={classnames('hero', styles.heroBanner, 'hero-survey')}>
        <div className="container">
          <h1 className="hero__title">State of DTI Devs SP2020</h1>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div key={fontColor} className="container">
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">Backend framework used by subteams</h2>
                <Pie
                  data={{
                    labels: ['Express', 'Firebase', 'Django'],
                    datasets: [
                      {
                        backgroundColor: [BLUE, GREEN, YELLOW],
                        hoverBackgroundColor: [BLUE, GREEN, YELLOW],
                        data: [2.5, 4, 0.5],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">Web frontend framework used by subteams</h2>
                <Pie
                  data={{
                    labels: ['React', 'Vue'],
                    datasets: [
                      {
                        backgroundColor: [BLUE, GREEN],
                        hoverBackgroundColor: [BLUE, GREEN],
                        data: [5, 2],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">Languages usage by subteams</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'TypeScript',
                      'JavaScript',
                      'Python',
                      'Dart',
                      'Swift',
                      'Kotlin',
                      'Java',
                    ],
                    datasets: [
                      {
                        label: 'Backend Languages',
                        backgroundColor: BLUE,
                        borderColor: BLUE,
                        borderWidth: 1,
                        hoverBackgroundColor: BLUE_DARK,
                        hoverBorderColor: BLUE_DARK,
                        data: [5.5, 1, 0.5, 0, 0, 0, 0],
                      },
                      {
                        label: 'Web Frontend Languages',
                        backgroundColor: GREEN,
                        borderColor: GREEN,
                        borderWidth: 1,
                        hoverBackgroundColor: GREEN_DARK,
                        hoverBorderColor: GREEN_DARK,
                        data: [6, 1, 0, 0, 0, 0, 0],
                      },
                      {
                        label: 'Mobile Languages',
                        backgroundColor: YELLOW,
                        borderColor: YELLOW,
                        borderWidth: 1,
                        hoverBackgroundColor: YELLOW_DARK,
                        hoverBorderColor: YELLOW_DARK,
                        data: [0, 0, 0, 1, 2, 1, 1],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">Languages usage by individuals @ DTI</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'TypeScript',
                      'JavaScript',
                      'Python',
                      'Dart',
                      'Swift',
                      'Kotlin',
                      'Java',
                    ],
                    datasets: [
                      {
                        label: 'Usage',
                        backgroundColor: BLUE,
                        borderColor: BLUE,
                        borderWidth: 1,
                        hoverBackgroundColor: BLUE_DARK,
                        hoverBorderColor: BLUE_DARK,
                        data: [26, 7, 3, 5, 6, 2, 2],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">Languages liked by individuals @ DTI</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'TypeScript',
                      'JavaScript',
                      'Dart',
                      'Swift',
                      'Kotlin',
                      'dti-lang',
                      'Java',
                      'Python',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: GREEN,
                        borderColor: GREEN,
                        borderWidth: 1,
                        hoverBackgroundColor: GREEN_DARK,
                        hoverBorderColor: GREEN_DARK,
                        data: [10, 6, 2, 2, 1, 1, 0, 0],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">Frameworks liked by individuals @ DTI</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'Express',
                      'React',
                      'Firebase',
                      'SnapKit',
                      'Flutter',
                      'Vue',
                      'SwiftUI',
                      'Meteor',
                      'Angular',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: YELLOW,
                        borderColor: YELLOW,
                        borderWidth: 1,
                        hoverBackgroundColor: YELLOW_DARK,
                        hoverBorderColor: YELLOW_DARK,
                        data: [9, 8, 7, 3, 2, 2, 1, 1, 0],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">How developers @ DTI test</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'Play Test',
                      'Test in prod 🤔',
                      'Test by Postman',
                      'Unit test',
                      'No test 🤔',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: BLUE,
                        borderColor: BLUE,
                        borderWidth: 1,
                        hoverBackgroundColor: BLUE_DARK,
                        hoverBorderColor: BLUE_DARK,
                        data: [15, 7, 4, 2, 0],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">What our developers know and want to know</h2>
                <HorizontalBar
                  data={{
                    labels: ['React', 'Vue', 'Firebase', 'Backend', 'iOS', 'Android', 'Flutter'],
                    datasets: [
                      {
                        label: 'Average Self-reported Knowledge Level',
                        backgroundColor: GREEN,
                        borderColor: GREEN,
                        borderWidth: 1,
                        hoverBackgroundColor: GREEN_DARK,
                        hoverBorderColor: GREEN_DARK,
                        data: [3.27, 1.73, 2.8, 3.07, 2, 1.6, 1.6],
                      },
                      {
                        label: 'Average Self-reported Willingness to learn',
                        backgroundColor: YELLOW,
                        borderColor: YELLOW,
                        borderWidth: 1,
                        hoverBackgroundColor: YELLOW_DARK,
                        hoverBorderColor: YELLOW_DARK,
                        data: [4.27, 3.4, 4.33, 4.53, 2.87, 2.87, 3.27],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">Languages used for developers' side projects</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'Python',
                      'JavaScript',
                      'TypeScript',
                      'Java',
                      'Swift',
                      'C/C++',
                      'Kotlin',
                      'C#',
                      'Rust',
                      'Go',
                      'OCaml',
                      'Dart',
                      'Haskell',
                      'samlang',
                      'dti-lang',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: BLUE,
                        borderColor: BLUE,
                        borderWidth: 1,
                        hoverBackgroundColor: BLUE_DARK,
                        hoverBorderColor: BLUE_DARK,
                        data: [12, 10, 7, 6, 5, 5, 3, 3, 2, 2, 2, 1, 1, 1, 0],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">Framework used for developers' side projects</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'React',
                      'Firebase',
                      'Express',
                      'SnapKit',
                      'React Native',
                      'Vue',
                      'Gatsby',
                      'Angular',
                      'SwiftUI',
                      'Flutter',
                      '.NET Core',
                      'Others',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: GREEN,
                        borderColor: GREEN,
                        borderWidth: 1,
                        hoverBackgroundColor: GREEN_DARK,
                        hoverBorderColor: GREEN_DARK,
                        data: [12, 8, 5, 3, 2, 2, 2, 1, 1, 1, 1, 2],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col--6 survey-block">
                <h2 className="centered">Tools used for developers' side projects</h2>
                <HorizontalBar
                  data={{
                    labels: [
                      'Type Checkers',
                      'Linters',
                      'Formatters',
                      'CI/CD',
                      'Static Analyzers',
                      'Sheet',
                      'None',
                    ],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: YELLOW,
                        borderColor: YELLOW,
                        borderWidth: 1,
                        hoverBackgroundColor: YELLOW_DARK,
                        hoverBorderColor: YELLOW_DARK,
                        data: [10, 9, 7, 6, 2, 1, 2],
                      },
                    ],
                  }}
                />
              </div>
              <div className="col col--6 survey-block">
                <h2 className="centered">Number of active side projects by individuals</h2>
                <HorizontalBar
                  data={{
                    labels: ['0', '1', '2', '3', '4', '5', '6'],
                    datasets: [
                      {
                        label: 'Votes',
                        backgroundColor: BLUE,
                        borderColor: BLUE,
                        borderWidth: 1,
                        hoverBackgroundColor: BLUE_DARK,
                        hoverBorderColor: BLUE_DARK,
                        data: [5, 3, 1, 4, 1, 1, 0],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default SurveySP20;
