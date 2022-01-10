import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container, Navbar, Nav } from 'react-bootstrap'
import { Row, Col, Badge, Alert } from "react-bootstrap";

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
    <div>
      <div>
        <div class="alert alert-primary" style={{marginTop: "50px", paddingTop: "20px", paddingBottom: "20px", backgroundColor: "#E1EDFF", border: "none", borderRadius: "11px"}} role="alert">
          You are now able to add your own contact and about page.<a href="/more" class="alert-link" style={{color: "#0d6efd", marginLeft: "5px", textDecoration: "none"}}>Check it out!</a>
        </div>
        <div className="form-cards" style={{ marginTop: "100px" }}>
          <div className="content-blob-white form-card">
            <h2 title="Yogastudio Namasté"></h2>
            <Container className="settings-card">
              <Row xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Edit studio details</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Edit profile</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">My plan</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Configure general terms</Card.Link></Col>
              </Row>
            </Container>
          </div>
          <div className="content-blob-white form-card">
            <h2 title="Payments"></h2>
            <Container className="settings-card">
              <Row xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><rect fill="none" height="24" width="24" /><path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Orders and payments</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Configure memberships</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Configure class passes</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><rect fill="none" height="24" width="24" /><path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Payment settings</Card.Link></Col>
              </Row>
            </Container>
          </div>
          <div className="content-blob-white form-card">
            <h2 title="Email"></h2>
            <Container className="settings-card">
              <Row xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Edit emails</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><rect fill="none" height="24" width="24" /><path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Email settings</Card.Link></Col>
              </Row>
            </Container>
          </div>
          <div className="content-blob-white  form-card">
            <h2 title="Customization"></h2>
            <Container className="settings-card">
              <Row xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link href="/About-form/upload" style={{ fontSize: "15px" }}>Edit About page<Badge style={{ marginLeft: "10px" }} bg="secondary">New</Badge></Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                <Col><Card.Link href="/Contact-form/contact" style={{ fontSize: "15px" }}>Edit Contact page<Badge style={{ marginLeft: "10px" }} bg="secondary">New</Badge></Card.Link></Col>
              </Row>
            </Container>
          </div>
          <div className="content-blob-white form-card">
            <h2 title="Schedule"></h2>
            <Container className="settings-card">
              <Row xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">Edit schedule</Card.Link></Col>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">View schedule 》</Card.Link></Col>
                <p style={{ color: "#999999", fontSize: "15px", marginTop: "5px" }}>momoyoga.com/yogastudiotest/</p>
              </Row>
              <Row style={{ marginTop: "10px" }} xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="#">View registration form 》</Card.Link></Col>
                <p style={{ color: "#999999", fontSize: "15px", marginTop: "5px" }}>momoyoga.com/yogastudiotest/register/</p>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

function NoMatch() {
  return (
    <div>Test</div>
  )
}