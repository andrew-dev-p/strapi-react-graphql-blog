import Card from "react-bootstrap/Card";
import { Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Portfolio } from "../pages/HomePage";

const PostGrid = ({ item }: { item: Portfolio }) => {
  console.log(item.gallery);

  return (
    <Col key={item.id} sm={12} md={6} lg={4} xl={4} className="pb-4">
      <Card className="shadow bg-tertiary-color card-img h-100">
        {item.gallery.length === 0 && (
          <Link to={`/portfolio/${item.slug}`}>
            <Card.Img src={`http://localhost:1337${item.gallery[0].url}`} />
          </Link>
        )}
        <Card.Body>
          <Card.Title className="fw-bold">{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
          <span>
            {item.tags &&
              item.tags.map((tag) => (
                <Link to={`/tag/${tag.slug}`}>
                  <Badge className="" bg="dark" key={tag.id}>
                    #{tag.name}
                  </Badge>
                </Link>
              ))}
          </span>
          <Card.Text className="py-2">
            <Col>{item.description}</Col>
            <Link to={`/portfolio/${item.slug}`}> View More </Link>{" "}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <span>
            {item.previewSlug != null && (
              <a target="_blank" href={item.previewSlug}>
                Live
              </a>
            )}
          </span>
        </Card.Footer> */}
      </Card>
    </Col>
  );
};

export default PostGrid;
