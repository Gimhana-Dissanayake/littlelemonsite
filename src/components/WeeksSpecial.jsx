import React from "react";
import "./WeeksSpecial.css";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";
import Card from "react-bootstrap/Card";
import specialImageOne from "../assets/special_one_img.jpg";
import specialImageTwo from "../assets/special_two_img.jpg";
import specialImageThree from "../assets/special_three_img.jpg";
import { useNavigate } from "react-router-dom";

const WeeksSpecial = () => {
  const navigate = useNavigate();

  return (
    <article className="weeksspecial">
      <Row>
        <Col md={6} xs={12}>
          <h1 className="text-center">This weeks specials!</h1>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Button title="Online Menu" className="online-menu" />
        </Col>
      </Row>
      <Row className="px-5 pt-2">
        <Col sm={12} md={4}>
          <Card className="specials__card">
            <Card.Img variant="top" src={specialImageOne} />
            <Card.Body>
              <Card.Title>Greek salad</Card.Title>
              <Card.Text>
                Greek salad: Feta, olives, tomatoes, and cucumbers combine for a
                fresh, flavorful Mediterranean culinary delight.
              </Card.Text>
              <Button
                title="Order delivery"
                onClick={() => {
                  navigate("/order-online");
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mt-3 mt-md-0">
          <Card className="specials__card">
            <Card.Img variant="top" src={specialImageTwo} />
            <Card.Body>
              <Card.Title>Bruchetta</Card.Title>
              <Card.Text>
                Bruschetta: Toasted bread topped with diced tomatoes, garlic,
                basil, and olive oil—a classic Italian appetizer.
              </Card.Text>
              <Button
                title="Order delivery"
                onClick={() => {
                  navigate("/order-online");
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mt-3 mt-md-0">
          <Card className="specials__card">
            <Card.Img variant="top" src={specialImageThree} />
            <Card.Body>
              <Card.Title>Lemon Dessert</Card.Title>
              <Card.Text>
                Lemon dessert: Zesty citrus delight featuring lemon-flavored
                treats, from tarts to cakes, refreshing and indulgent.
              </Card.Text>
              <Button
                title="Order delivery"
                onClick={() => {
                  navigate("/order-online");
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default WeeksSpecial;
