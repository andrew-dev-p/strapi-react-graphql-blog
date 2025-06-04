import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PostGrid from "../components/PostGrid";
import type { Portfolio } from "./HomePage";

const GET_CATEGORY_PORTFOLIOS = gql`
  query GetCategoryPortfolios($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
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

const StyledCategoryPage = styled.div`
  padding: 2rem 0;
  background-color: #f8f9fa;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CategoryHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled.p`
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const PortfolioGrid = styled.div`
  margin-top: 3rem;
`;

const Category = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_CATEGORY_PORTFOLIOS, {
    variables: { slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const category = data.categories[0];
  const portfolios = category.portfolios;

  return (
    <StyledCategoryPage>
      <ContentContainer>
        <CategoryHeader>
          <CategoryTitle>{category.name}</CategoryTitle>
          <CategoryDescription>
            {category.description || `Explore all projects in ${category.name}`}
          </CategoryDescription>
        </CategoryHeader>

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
    </StyledCategoryPage>
  );
};

export default Category;
