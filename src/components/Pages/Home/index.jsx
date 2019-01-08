import React, { Fragment } from 'react';
import {
  Card,
  Badge,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';

import Layout from '../../Organisms/Layout';
import Grid from '../../Organisms/Grid';
import Section from '../../Molecules/Section';

const Home = () => (
  <Layout>
    <Grid
      content={
        <Section title="Explore latests decks from the community">
          <CardColumns>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a
                  natural lead-in to additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
            >
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button>Button</Button>
            </Card>

            <Card body inverse color="primary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button color="secondary">Button</Button>
            </Card>

            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a
                  natural lead-in to additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
            >
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button>Button</Button>
            </Card>

            <Card body inverse color="success">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button color="secondary">Button</Button>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a
                  natural lead-in to additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
            >
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button>Button</Button>
            </Card>

            <Card body inverse color="primary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button color="secondary">Button</Button>
            </Card>

            <Card body inverse color="info">
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This card has supporting text below as a
                natural lead-in to additional content.
              </CardText>
              <Button>Button</Button>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: '#333',
                borderColor: '#333'
              }}
            >
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button>Button</Button>
            </Card>

            <Card body inverse color="warning">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural
                lead-in to additional content.
              </CardText>
              <Button color="secondary">Button</Button>
            </Card>
          </CardColumns>
        </Section>
      }
      sidebar={
        <Fragment>
          <Section
            title="Your latest decks"
            action="New deck"
          >
            <ul>
              <li>
                Spell <Badge>Hunter</Badge>{' '}
                <Badge>1 day ago</Badge>
              </li>
              <li>
                Clone <Badge>Priest</Badge>{' '}
                <Badge>3 days ago</Badge>
              </li>
              <li>
                Deathrattle <Badge>Hunter</Badge>{' '}
                <Badge>3 weeks ago</Badge>
              </li>
              <li>
                Big Spell <Badge>Mage</Badge>{' '}
                <Badge>1 month ago</Badge>
              </li>
            </ul>
          </Section>

          <br />

          <Section title="Filters">
            <p>Filter by class</p>
            <ul>
              <li>
                <strong>All</strong>
              </li>
              <li>Druid</li>
              <li>Hunter</li>
              <li>Mage</li>
              <li>Paladin</li>
              <li>Priest</li>
              <li>Shaman</li>
              <li>Rogue</li>
              <li>Warlock</li>
              <li>Warrior</li>
            </ul>
          </Section>
        </Fragment>
      }
    />
  </Layout>
);

export default Home;
