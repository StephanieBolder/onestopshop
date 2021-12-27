import { Container } from "react-bootstrap";
import Title from "../components/Title";
import { getFromStore } from "../utils/storage";

export default function AboutPage({props}) {
    const ABOUT = 'about';
    let {text, title, preview: image} = getFromStore(ABOUT);
    return (
        <div className="mt-10">
            <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex flex-column justify-content-center">
            {image && (
                <img className="w-50" src={image} />
            )}
            {title && (
                <Title title={title}/>
            )}
            {text && (
                <p>{text}</p>
            )}
            </Container>
        </div>
    );
}