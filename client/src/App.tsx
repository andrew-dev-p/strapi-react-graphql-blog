import { ApolloProvider } from "@apollo/client";
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import client from "./lib/apolloClient";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import SinglePortfolio from "./pages/SinglePortfolio";
import Tag from "./pages/Tag";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container
          style={{
            maxWidth: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <Container
            style={{
              background:
                "linear-gradient(75deg, rgba(37, 27, 55, 1) 0%, rgba(55, 41, 72, 1) 0%, rgba(255, 202, 202, 1) 100%)",
              height: "100vh",
              maxWidth: "100%",
              marginBottom: "-20vh",
            }}
          >
            <SiteHeader />
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/portfolio/:slug" element={<SinglePortfolio />} />
                <Route path="/tag/:slug" element={<Tag />} />
              </Routes>
            </Container>
            <SiteFooter />
          </Container>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
