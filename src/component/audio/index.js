import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Audio = () => {
  return (
    <div className="">
      <header className=" ">
      <h2> Top Relted Audio !</h2>
      <Container>
        <Row>
          <Col style={{ margin: "20px" }}>
            {" "}
            <CardGroup>
              <Card style={{ color: "red" }}>
                <Card.Img
                  variant="top"
                  src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                  height="350"
                  width="250"
                  alt="no image"
                />
                <Card.Body>
                  <Card.Title>Audio Name</Card.Title>
                  <Card.Text>Audio Description</Card.Text>
                  <Button variant="danger">More</Button>
                  <Button variant="light">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-caret-right-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Download 3 month ago</small>
                </Card.Footer>
              </Card>
              {/* ///////////////////////////////// */}
            </CardGroup>
          </Col>
          <Col style={{ margin: "20px" }}>
            <Card >
              <Card.Img
                variant="top"
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                height="350"
                width="250"
                alt="no image"
              />
              <Card.Body>
                <Card.Title>Movies Name</Card.Title>
                <Card.Text>Movies Description</Card.Text>
                <Button variant="danger">More</Button>
                <Button variant="light">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-caret-right-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </svg>{" "}
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Download 3 month ago</small>
              </Card.Footer>
            </Card>
            </Col>
            </Row>

            <Row>
            <Col style={{ margin: "20px" }}>
            <Card >
              <Card.Img
                variant="top"
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                height="350"
                width="250"
                alt="no image"
              />
              <Card.Body>
                <Card.Title>Movies Name</Card.Title>
                <Card.Text>Movies Description</Card.Text>
                <Button variant="danger">More</Button>
                <Button variant="light">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-caret-right-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </svg>{" "}
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Download 3 month ago</small>
              </Card.Footer>
            </Card>
            </Col>
            <Col style={{ margin: "20px" }}>
            <Card >
              <Card.Img
                variant="top"
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                height="350"
                width="250"
                alt="no image"
              />
              <Card.Body>
                <Card.Title>Movies Name</Card.Title>
                <Card.Text>Movies Description</Card.Text>
                <Button variant="danger">More</Button>
                <Button variant="light">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-caret-right-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </svg>{" "}
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Download 3 month ago</small>
              </Card.Footer>
            </Card>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Audio;