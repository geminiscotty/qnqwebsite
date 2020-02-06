import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styles from './sponsorship.module.scss';

import {
  SiteTitle,
  Section,
  SectionTitle,
  SectionContent,
  StandFirst,
} from '../components/section.js';

export const HomepageTemplate = props => {
  const { siteTitle, siteDescription } = props.data.site.siteMetadata;
  const location = props.location;
  const { events, next_event } = props.data.meetupGroup;
  const meetup = events.find(e => e.meetupId === next_event.id);

  return (
    <div className={styles.container}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />

      <Section>
        <SectionTitle>
          <SiteTitle />
        </SectionTitle>
        <SectionContent>
          <h1>Sponsor Quants and Quills</h1>
          <StandFirst>
            Quants and Quills is a volunteer run organisation, we run a monthly
            event called Hacks/Hackers Brisbane and have a complementary monthly
            newsletter. Our event attendees and newsletter subscribers are a mix
            of technology and media workers.
          </StandFirst>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Event sponsorship</SectionTitle>
        <SectionContent>
          <p>
            Because we are a volunteer run organisation with a strong community,
            we can get a lot done on a shoe-string budget. But we rely on the
            generosity of our valued sponsors to make sure our events are the
            best they can be.
          </p>
          <p>
            We're committed to keeping our monthly events free to attend and
            giving attendees the best experience we can including a free feed
            and a great opportunity to chat and network with peers in the
            technology and media industries.
          </p>
          <p>
            But we want to do event more. With a relatively modest sponsorship,
            you could help ...
          </p>
          <table>
            <tbody>
              <tr>
                <th>2020 venue sponsor</th>
                <td>
                  <a href="http://www.abc.net.au/news">ABC News</a>
                </td>
              </tr>
              <tr>
                <th>2020 food and drinks sponsor</th>
                <td>
                  <a href="https://www.thoughtworks.com/">ThoughtWorks</a>
                </td>
              </tr>
              <tr>
                <th>Interstate speaker</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>{' '}
                  ~$500
                </td>
              </tr>
            </tbody>
          </table>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Newsletter Sponsorship</SectionTitle>
        <SectionContent>
          <p>
            Our newsletter serves as a complement to our monthly events. It
            serves a mix of ...
          </p>
          <p>Book a sponsorship slot below for $100.</p>
          <table>
            <tbody>
              <tr>
                <th>February 2020</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>
                </td>
              </tr>
              <tr>
                <th>March 2020</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>
                </td>
              </tr>
              <tr>
                <th>April 2020</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>
                </td>
              </tr>
              <tr>
                <th>May 2020</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>
                </td>
              </tr>
              <tr>
                <th>June 2020</th>
                <td>
                  <a href="" className={styles.button}>
                    Get in touch
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </SectionContent>
      </Section>
    </div>
  );
};

export default HomepageTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    meetupGroup {
      next_event {
        id
      }
      events {
        name
        status
        local_date
        local_time
        link
        meetupId
        yes_rsvp_count
        description
      }
    }
  }
`;
