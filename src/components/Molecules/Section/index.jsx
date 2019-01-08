import React, { Fragment } from 'react';
import {
  Card,
  Badge,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const Section = ({ title, children, action }) => (
  <Card>
    <CardHeader>
      {action ? (
        <div className="section-header">
          <div>{title}</div>
          <div>
            <Button color="primary" size="sm">
              {action}
            </Button>
          </div>
        </div>
      ) : (
        title
      )}
    </CardHeader>
    <CardBody>{children}</CardBody>
  </Card>
);

export default Section;
