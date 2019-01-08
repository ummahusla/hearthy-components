import React, { Fragment } from 'react';
import {
  Card,
  Badge,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';

import Navigation from '../../Organisms/Navigation';
import Grid from '../../Organisms/Grid';
import Section from '../../Molecules/Section';

const Home = () => (
  <Fragment>
    <Navigation />
    <Grid
      content={
        <Section title="Explore decks from the community">
          <CardColumns>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text
                  below as a natural lead-in to additional
                  content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
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
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text
                  below as a natural lead-in to additional
                  content. This card has even longer content
                  than the first to show that equal height
                  action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
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
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text
                  below as a natural lead-in to additional
                  content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
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
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text
                  below as a natural lead-in to additional
                  content. This card has even longer content
                  than the first to show that equal height
                  action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card body inverse color="primary">
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
  </Fragment>
);

export default Home;
