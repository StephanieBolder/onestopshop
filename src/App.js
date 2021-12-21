import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Navbar, Nav } from 'react-bootstrap'

import './App.css';
import { Outlet, Route, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import More from './pages/More';
import logo from '../src/assets/Logo-NoBackground.png'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardPage />} />
          <Route path="about/upload" element={<About index="1"/>} />
          <Route path="about/text" element={<About index="2"/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="more" element={<More />} />

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
      <Navbar expand="xxl" variant="pills" defaultActiveKey="/home">
        <Container>
          <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Classes">Classes</Nav.Link>
            <Nav.Link href="#Videos">Videos</Nav.Link>
            <Nav.Link href="#Yogis">Yogis</Nav.Link>
            <Nav.Link href="#Teachers">Teachers</Nav.Link>
            <Nav.Link href="/More">More</Nav.Link>
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
    <div>Test</div>
  )
}