import { Container } from "react-bootstrap";
import Title from "../components/Title";
import { getFromStore } from "../utils/storage";

export default function ContactPage({props}) {
    const CONTACT = 'contact';
    let {showAddress, showEmail, showPhone, city, zipcode, address, phone, email, title, text} = getFromStore(CONTACT);
    const addressString = `${address}, ${zipcode}, ${city}`;
    console.log(getFromStore(CONTACT));
    return (
        <div className="mt-10">
            <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex flex-column justify-content-center">
            {title && (
                <Title title={title}/>
            )}
            {text && (
                <p>{text}</p>
            )}
            {showAddress && (
                <div>{addressString}</div>
            )}
            {showPhone && (
                <div>{phone}</div>
            )}
            {showEmail && (
                <div>{email}</div>
            )}
            </Container>
        </div>
    );
}