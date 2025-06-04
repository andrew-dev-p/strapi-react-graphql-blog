import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const GetCategories = gql`
  query categories {
    categories {
      name
      slug
    }
  }
`;

const StyledNavbar = styled(Navbar)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
`;

const BrandLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: var(--secondary-font);

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
  }
`;

const StyledNav = styled(Nav)`
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8) !important;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff !important;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const NavBar = () => {
  const { data, loading, error } = useQuery(GetCategories);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <StyledNavbar sticky="top" collapseOnSelect expand="lg">
      <BrandLink to="/">&lt;Andrii /&gt;</BrandLink>
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <StyledNav>
          {data.categories.map(
            (category: { name: string; slug: string }, index: number) => (
              <NavLink key={index} to={`/category/${category.slug}`}>
                {category.name}
              </NavLink>
            )
          )}
        </StyledNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavBar;
