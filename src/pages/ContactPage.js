import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "../components/Title";
import { getFromStore } from "../utils/storage";

export default function ContactPage({ props }) {
    const CONTACT = 'contact';
    let { showAddress, showEmail, showPhone, city, zipcode, address, phone, email, title, text } = getFromStore(CONTACT);
    const addressString = `${address}, ${zipcode}, ${city}`;
    console.log(getFromStore(CONTACT));
    return (
        <div className="about-page mt-10 d-flex flex-column justify-content-center mb-5">
            <Row className="mb-5" xs="auto">
                <Col><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" style={{ marginRight: "-15px" }} width="18px" fill="#0D6EFD"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" /></svg></Col>
                <Col><Card.Link style={{ fontSize: "15px" }} href="/more">Back</Card.Link></Col>
            </Row>
            <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex flex-column justify-content-center">
                {title && (
                    <Title title={title} />
                )}
                {text && (
                    <p>{text}</p>
                )}
                <Row xs="auto">
                    <Col><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#444444"><g><rect fill="none" height="24" width="24" /></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" /></g></svg></Col>
                    {showAddress && (
                        <div>{addressString}</div>
                    )}
                </Row>
                {showPhone && (
                <Row className="mt-2" xs="auto">
                    <Col><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg></Col>
                    
                        <div>{phone}</div>
                </Row>)}
                <Row className="mt-2" xs="auto">
                    <Col><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="#444444"/>
</svg></Col>
                    {showEmail && (
                        <div>{email}</div>
                    )}
                </Row>

            </Container>
        </div>
    );
}