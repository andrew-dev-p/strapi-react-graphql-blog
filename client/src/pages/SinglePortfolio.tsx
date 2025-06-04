import { useParams } from "react-router-dom";
import { Badge, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import type { Portfolio } from "./HomePage";

const GET_PORTFOLIO = gql`
  query GetPortfolio($slug: String!) {
    portfolios(filters: { slug: { eq: $slug } }) {
      documentId
      title
      date
      slug
      createdAt
      updatedAt
      publishedAt
      description
      gallery {
        name
        alternativeText
        caption
        width
        height
        url
        previewUrl
        provider
        createdAt
        updatedAt
        publishedAt
      }
      category {
        documentId
        name
        slug
        createdAt
        updatedAt
        publishedAt
      }
      tags {
        documentId
        name
        slug
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
`;

const StyledPortfolioPage = styled.div`
  padding: 2rem 0;
  background-color: #f8f9fa;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PortfolioHeader = styled.div`
  margin-bottom: 2rem;
`;

const PortfolioTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const PortfolioMeta = styled.div`
  color: #6c757d;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MetaDivider = styled.span`
  color: #dee2e6;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledBadge = styled(Badge)`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #dee2e6;
    transform: translateY(-1px);
  }
`;

const PortfolioContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledCarousel = styled(Carousel)`
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .carousel-item {
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 1rem;
    opacity: 0;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }

  &:hover {
    .carousel-control-prev,
    .carousel-control-next {
      opacity: 1;
    }
  }

  .carousel-indicators {
    margin-bottom: 1rem;

    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;

      &.active {
        background-color: white;
      }
    }
  }
`;

const MarkdownContent = styled.div`
  color: #495057;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 1rem;
    color: #212529;
  }
`;

const SinglePortfolio = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PORTFOLIO, {
    variables: { slug: id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const portfolio = data.portfolios[0];

  return (
    <StyledPortfolioPage>
      <ContentContainer>
        <PortfolioHeader>
          <PortfolioTitle>{portfolio.title}</PortfolioTitle>
          <PortfolioMeta>
            <span>{portfolio.date}</span>
            <MetaDivider>|</MetaDivider>
            <span>John Doe</span>
          </PortfolioMeta>
          <TagsContainer>
            {portfolio.tags.map((tag: Portfolio["tags"][0]) => (
              <Link
                key={tag.id}
                to={`/tag/${tag.slug}`}
                className="text-decoration-none"
              >
                <StyledBadge>#{tag.name}</StyledBadge>
              </Link>
            ))}
          </TagsContainer>
        </PortfolioHeader>

        <PortfolioContent>
          {portfolio.gallery && portfolio.gallery.length > 0 && (
            <StyledCarousel
              fade
              indicators
              controls
              interval={5000}
              pause="hover"
            >
              {portfolio.gallery.map((image: Portfolio["gallery"][0]) => (
                <Carousel.Item key={image.id}>
                  <img
                    src={`http://localhost:1337${image.url}`}
                    alt={image.alternativeText || portfolio.title}
                  />
                </Carousel.Item>
              ))}
            </StyledCarousel>
          )}

          <MarkdownContent>
            <ReactMarkdown>{portfolio.description}</ReactMarkdown>
          </MarkdownContent>
        </PortfolioContent>
      </ContentContainer>
    </StyledPortfolioPage>
  );
};

export default SinglePortfolio;
