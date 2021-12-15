import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Navbar, Nav } from 'react-bootstrap'

import './App.css';
import { Outlet, Route, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


function Layout() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="navbartitle" href="#home">Momoyoga</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </div>

  )
}

function CardPage() {
  return (
    <Card style={{ color: "#000" }}>
      <Card.Body style={{ textAlign: "left", width: "60rem", marginLeft: "30px", marginTop: "30px" }}>
        <Card.Title className="titlecard">
          Customize your about page
        </Card.Title>
        <Card.Text style={{ fontSize: "15px", color: "#999999" }}>
          You are now able to add and customize your own Contact page. You decide yourself what information you want on this page!
        </Card.Text>
        <Button variant="primary">Check to see what the page will look like</Button>
        <Card.Text style={{ fontWeight: "lighter", fontSize: "25px", marginTop: "45px" }}>
          Decide the information on the page
        </Card.Text>
        <Card.Text style={{ color: "#999999", fontSize: "15px" }}>
          Click on the information you want on your contact page. This will be displayed above the contact form.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function NoMatch() {
  return (
    <div>About</div>
  )
}