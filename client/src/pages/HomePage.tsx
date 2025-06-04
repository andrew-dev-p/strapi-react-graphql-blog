import useFetch from "../hooks/useFetch";
import { Container, Row } from "react-bootstrap";
import { HeroSection, StatCard, PostGrid } from "../components";

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

const HomePage = () => {
  const {
    data: portfolios,
    loading,
    error,
  } = useFetch("http://localhost:1337/api/portfolios?populate=*");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="page-id-home-page">
      <Container>
        <HeroSection />
        <StatCard projects={portfolios.meta.pagination.total} />
      </Container>
      <Row>
        {portfolios.data.map((item: Portfolio) => (
          <PostGrid key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
