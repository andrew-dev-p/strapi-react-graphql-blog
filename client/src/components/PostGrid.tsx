import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { Portfolio } from "../pages/HomePage";

const StyledCard = styled(Card)`
  transition: all 0.3s ease-in-out;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;
`;

const StyledBadge = styled(Badge)`
  margin-right: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  background-color: #f8f9fa;
  color: #212529;
  border: 1px solid #dee2e6;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-1px);
  }
`;

const DescriptionText = styled(Card.Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ViewMoreLink = styled(Link)`
  color: #0d6efd;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0a58ca;
    transform: translateX(5px);
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled(Card.Subtitle)`
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.75rem;
`;

const PostGrid = ({ item }: { item: Portfolio }) => {
  return (
    <StyledCard>
      {item.gallery && item.gallery.length > 0 && (
        <Link to={`/portfolio/${item.slug}`}>
          <StyledCardImg
            variant="top"
            src={`http://localhost:1337${item.gallery[0].url}`}
            alt={item.gallery[0].alternativeText || item.title}
          />
        </Link>
      )}
      <StyledCardBody>
        <div>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.date}</CardSubtitle>

          <TagsContainer>
            {item.tags &&
              item.tags.map((tag) => (
                <Link to={`/tag/${tag.slug}`} key={tag.id}>
                  <StyledBadge>#{tag.name}</StyledBadge>
                </Link>
              ))}
          </TagsContainer>

          <DescriptionText>{item.description}</DescriptionText>
        </div>

        <ViewMoreLink to={`/portfolio/${item.slug}`}>View More →</ViewMoreLink>
      </StyledCardBody>
    </StyledCard>
  );
};

export default PostGrid;
