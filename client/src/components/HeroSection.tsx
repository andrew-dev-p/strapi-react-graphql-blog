import { Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Row className="align-items-center g-lg-5 pt-5 pb-5">
      <Col lg={8}>
        <h1 className="display-4 fw-bold lh-1 mb-3 text-tertiary-color">
          Hi, I'm <span className="text-quaternary-color">John Doe</span>
        </h1>
        <h3 className="mb-3 text-tertiary-color text-primary-font">
          Full-stack Web Developer
        </h3>
        <p className="lead text-quaternary-color">
          1+ Years of Experience in
          <br />
          <span className="lead-section-skills">Websites</span> +
          <span className="lead-section-skills"> Apps</span>
          <br />
          Designing &amp; Development
        </p>
      </Col>
    </Row>
  );
};

export default HeroSection;
