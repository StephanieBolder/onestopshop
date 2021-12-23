import Title from "../components/Title";
import { Card, Row, Container, Col, Badge } from "react-bootstrap";
import '../App.css';

export default function More() {
    return (
        <div>
            <div>
                <Title title="Settings page" />
                <Card style={{ color: "#000", width: "25%", paddingBottom: "20px"}}>
                    <Title title="Customize"><Badge style={{marginLeft: "10px"}} bg="secondary">New</Badge></Title>
                <Container className="container-card">
                    <Row xs="auto">
                        <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                        <Col><Card.Link href="/About">About page<Badge style={{marginLeft: "10px"}} bg="secondary">New</Badge></Card.Link></Col>
                    </Row>
                    <Row style={{marginTop: "10px"}} xs="auto">
                        <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Col>
                        <Col><Card.Link href="/Contact">Contact page<Badge style={{marginLeft: "10px"}} bg="secondary">New</Badge></Card.Link></Col>
                    </Row>
                </Container>
                </Card>
            </div>
        </div>
    )
}