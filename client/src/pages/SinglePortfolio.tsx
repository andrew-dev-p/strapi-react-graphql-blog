import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col, Badge, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import useFetch from "../hooks/useFetch";
import type { Portfolio } from "./HomePage";

const SinglePortflio = () => {
  const { id } = useParams();

  const {
    data: portfolios,
    loading,
    error,
  } = useFetch<{ data: Portfolio[] }>(
    `http://localhost:1337/api/portfolios?filters[slug][$eq]=${id}&populate=*`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div id="page-id-single-post">
      <div className="my-5 text-quaternary-color">
        <Row>
          <h1 className="display-4">{portfolios?.data[0].title}</h1>
        </Row>
        <p>
          <span>{portfolios?.data[0].date}</span>
          <span className="mx-2">|</span>
          <span>John Doe</span>
        </p>
        <span>
          {portfolios?.data[0].tags &&
            portfolios?.data[0].tags.map((language) => (
              <Link
                key={language.id}
                to={`/tag/${language.slug}`}
                className="text-decoration-none"
              >
                <Badge
                  bg="none"
                  className="bg-quaternary-color text-primary-color"
                  key={language.id}
                >
                  #{language.name}
                </Badge>
              </Link>
            ))}
        </span>
      </div>
      <Row className="post-detail rounded-top pt-3 mb-5 bg-quaternary-color shadow-lg">
        <Col lg={12} md={12} sm={12}>
          {portfolios?.data[0].gallery &&
            portfolios?.data[0].gallery.length === 0 && (
              <Link to={`${portfolios?.data[0].gallery[0].url}`}>
                <Card.Img
                  id="featued-img"
                  src={`http://localhost:1337${portfolios?.data[0].gallery[0].url}`}
                />
              </Link>
            )}
          {portfolios?.data[0].gallery &&
            portfolios?.data[0].gallery.length > 0 && (
              <Carousel>
                <Carousel.Item>
                  <Link to={`/portfolio/${portfolios?.data[0].slug}`}>
                    <Card.Img
                      id="featued-img"
                      src={`http://localhost:1337${portfolios?.data[0].gallery[0].url}`}
                    />
                  </Link>
                </Carousel.Item>
                {portfolios?.data[0].gallery.map((gallery) => (
                  <Carousel.Item key={gallery.id} className="rounded">
                    <Card.Img
                      id="featued-img"
                      src={`http://localhost:1337${gallery.url}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          <ReactMarkdown>{portfolios?.data[0].description}</ReactMarkdown>
        </Col>
      </Row>
    </div>
  );
};

export default SinglePortflio;
