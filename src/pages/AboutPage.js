import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "../components/Title";
import { getFromStore } from "../utils/storage";

export default function AboutPage({ props }) {
    const ABOUT = 'about';
    let { text, title, preview: image } = getFromStore(ABOUT);
    return (
        <div className="mt-10 d-flex flex-column justify-content-center mb-5">
            <Row className="mb-5" xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="18px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="/more">Back</Card.Link></Col>
            </Row>
            <Container className="bg-white p-10 text-start border rounded-3 text-center" style={{ width: "60%" }}>
                <div>
                    {image && (
                        <img className="w-75 mt-2 mb-5 " src={image} />
                    )}
                </div>
                <div className="text-start ms-5 me-5 ">
                    <div className="mb-5" style={{ fontSize: "100px", color: "#444444" }}>
                        {title && (
                            <Title title={title} />
                        )}
                    </div>
                    <div className="">
                        {text && (
                            <p className="ptext">{text}</p>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}