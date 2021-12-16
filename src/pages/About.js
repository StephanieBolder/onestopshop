import Title from "../components/Title";
import logo from '../assets/logo192.png'
import { Card, Row, Container, Col, Badge } from "react-bootstrap";

export default function About() {
    return (
        <div>
            <Title title="About - Develop" />
            <Container >
                <Card style={{ width: "80%" }}>
                    <Title title="Customize your own about page" />
                    <Card.Text style={{ width: "70%", textAlign: "left", color: "#999999", fontSize: "14px" }}>You are now able to add your own About page. On this page you can write about your studio, who you are, anything!</Card.Text>
                    <Card.Link>Check out a preview of the page</Card.Link>
                    <Card.Text style={{ color: "#444444", fontSize: "20px", marginBottom: "2px" }}>Upload your image</Card.Text>
                    <Card.Text style={{ color: "#999999", fontSize: "14px" }}>You first have to upload an image, for yogis to know who you are.</Card.Text>

                </Card>
            </Container>
        </div>
    )
}