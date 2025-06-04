import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PostGrid from "../components/PostGrid";
import type { Portfolio } from "./HomePage";

const GET_TAG_PORTFOLIOS = gql`
  query GetTagPortfolios($slug: String!) {
    tags(filters: { slug: { eq: $slug } }) {
      name
      portfolios {
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
  }
`;

const StyledTagPage = styled.div`
  padding: 2rem 0;
  background-color: #f8f9fa;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TagHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const TagTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const TagDescription = styled.p`
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const PortfolioGrid = styled.div`
  margin-top: 3rem;
`;

const Tag = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_TAG_PORTFOLIOS, {
    variables: { slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tag = data.tags[0];
  const portfolios = tag.portfolios;

  return (
    <StyledTagPage>
      <ContentContainer>
        <TagHeader>
          <TagTitle>#{tag.name}</TagTitle>
          <TagDescription>
            Explore all projects tagged with {tag.name}
          </TagDescription>
        </TagHeader>

        <PortfolioGrid>
          <Row>
            {portfolios.map((portfolio: Portfolio) => (
              <Col key={portfolio.id} xs={12} sm={6} md={4}>
                <PostGrid item={portfolio} />
              </Col>
            ))}
          </Row>
        </PortfolioGrid>
      </ContentContainer>
    </StyledTagPage>
  );
};

export default Tag;
