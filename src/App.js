import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Navbar, Nav } from 'react-bootstrap'

import './App.css';
import { Outlet, Route, Routes, useMatch, useNavigate, useParams, useResolvedPath } from 'react-router';
import AboutForm from './pages/AboutForm';
import ContactForm from './pages/ContactForm';
import AboutPage from './pages/AboutPage';
import More from './pages/More';
import logo from '../src/assets/Logo-NoBackground.png'
import ContactPage from './pages/ContactPage';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardPage />} />
          <Route path="about-form/upload" element={<AboutForm index="1" />} />
          <Route path="about-form/text" element={<AboutForm index="2" />} />
          <Route path="contact-form/contact" element={<ContactForm index="1" />} />
          <Route path="contact-form/text" element={<ContactForm index="2" />} />
          <Route path="about-page" element={<AboutPage />} />
          <Route path="contact-page" element={<ContactPage />} />
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


function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let isMatch = match ? match.path == match.pathNameBase : false;
  return (
      <Link
        className={isMatch ? 'active-link' : 'nonactive-link'}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
}

function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAdmin, setShowAdmin] = useState(true);
  const isAdmin = true;
  useEffect(() => {
    setShowAdmin(searchParams.get('as') != 'yogi');
    
  }, [searchParams]);
  
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div>
      <Navbar expand="xl" variant="pills">
        <Container>
          <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
          <Nav className="justify-content-start align-items-center navbar-collapses">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Videos">Videos</NavLink>
            <NavLink to="/Classes">Classes</NavLink>
            {showAdmin && (
            <div>
              <NavLink to="/Yogis">Yogis</NavLink>
              <NavLink to="/Teachers">Teachers</NavLink>
              <NavLink to="/more">More</NavLink>
            </div>
            )}
            {(!showAdmin && isAdmin) && (
              <NavLink to="/more">Back to admin</NavLink>
            )}
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