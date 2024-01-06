import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Avatar from "../components/Avatar";
import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import person4 from "../assets/person_4.jpg";

const testimonials1 = [
  {
    name: "Emily Johnson",
    date: "May 15, 2023",
    imgUrl: person1,
  },
  {
    name: "Brandon Davis",
    date: "August 8, 2023",
    imgUrl: person2,
  },
  {
    name: "Olivia Martinez",
    date: "September 22, 2023",
    imgUrl: person3,
  },
];

const testimonials2 = [
  {
    name: "Jacob Thompson",
    date: "November 4, 2023",
    imgUrl: person4,
  },
  {
    name: "Ava Brown",
    date: "July 1, 2023",
    imgUrl: person1,
  },
  {
    name: "Ethan Wilson",
    date: "October 12, 2023",
    imgUrl: person2,
  },
];

const testimonials3 = [
  {
    name: "Sophia Miller",
    date: "February 28, 2023",
    imgUrl: person3,
  },
  {
    name: "Ethan Wilson",
    date: "July 1, 2023",
    imgUrl: person4,
  },
  {
    name: "Sophia Miller",
    date: "June 9, 2023",
    imgUrl: person1,
  },
];

const Testimonials = () => {
  return (
    <section className="menu mb-3">
      <Container>
        <Row className="mt-5">
          {testimonials1.map((item) => (
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Avatar url={item.imgUrl} />
                    <div className="ps-3">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.date}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quos nobis, quam maxime sit ullam hic ipsam
                    recusandae fuga illo itaque nesciunt iure magnam tempora
                    repellat mollitia ipsa ipsum cum?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          {testimonials2.map((item) => (
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Avatar url={item.imgUrl} />
                    <div className="ps-3">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.date}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quos nobis, quam maxime sit ullam hic ipsam
                    recusandae fuga illo itaque nesciunt iure magnam tempora
                    repellat mollitia ipsa ipsum cum?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          {testimonials3.map((item) => (
            <Col sm={12} md={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Avatar url={item.imgUrl} />
                    <div className="ps-3">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.date}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quos nobis, quam maxime sit ullam hic ipsam
                    recusandae fuga illo itaque nesciunt iure magnam tempora
                    repellat mollitia ipsa ipsum cum?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
