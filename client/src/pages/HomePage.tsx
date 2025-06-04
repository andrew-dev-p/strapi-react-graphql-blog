import { Container, Row, Col } from "react-bootstrap";
import { HeroSection, StatCard, PostGrid } from "../components";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

export interface Portfolio {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  gallery: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  category: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  } | null;
  tags: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
}

const PORTFOLIOS = gql`
  query GetPortfolios {
    portfolios(sort: "date:desc", pagination: { page: 1, pageSize: 30 }) {
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

const StyledHomePage = styled.div`
  padding: 2rem 0;
  background-color: #f8f9fa;
`;

const ContentContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
`;

const DeveloperSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0 3rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DeveloperImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0d6efd;
`;

const DeveloperDetails = styled.div`
  flex: 1;
`;

const DeveloperName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const DeveloperTitle = styled.h3`
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const DeveloperBio = styled.p`
  color: #495057;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillBadge = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const PortfolioSection = styled.div`
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 2rem;
  text-align: center;
`;

const HomePage = () => {
  const { data, loading, error } = useQuery(PORTFOLIOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <StyledHomePage>
      <ContentContainer>
        <HeroSection />

        <DeveloperSection>
          <DeveloperInfo>
            <DeveloperImage
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Developer Profile"
            />
            <DeveloperDetails>
              <DeveloperName>Andrii</DeveloperName>
              <DeveloperTitle>Full Stack Developer</DeveloperTitle>
              <DeveloperBio>
                Passionate full-stack developer with expertise in modern web
                technologies. Specializing in React, Node.js, and GraphQL.
                Building scalable and user-friendly applications with a focus on
                performance and clean code.
              </DeveloperBio>
              <SkillsContainer>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>GraphQL</SkillBadge>
                <SkillBadge>MongoDB</SkillBadge>
                <SkillBadge>Docker</SkillBadge>
              </SkillsContainer>
            </DeveloperDetails>
          </DeveloperInfo>
        </DeveloperSection>

        <StatCard />

        <PortfolioSection>
          <SectionTitle>My Portfolio</SectionTitle>
          <Row>
            {data.portfolios.map((item: Portfolio) => (
              <Col key={item.id} xs={12} sm={6} md={4}>
                <PostGrid item={item} />
              </Col>
            ))}
          </Row>
        </PortfolioSection>
      </ContentContainer>
    </StyledHomePage>
  );
};

export default HomePage;
