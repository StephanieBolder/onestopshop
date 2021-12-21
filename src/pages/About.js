import Title from "../components/Title";
import logo from '../assets/logo192.png'
import { Card, Row, Container, Col, Badge, Button, Form } from "react-bootstrap";
import plant from '../assets/Plant.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About({ index }) {
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    let navigate = useNavigate();
    const nextRoute = () => {
        navigate('/about/text');
    }

    const onChangePicture = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreview(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    return (
        <div>
            <Title title="About - Develop" />
            <Container className="bg-white p-10 text-start border rounded-3 position-relative">
                <div className="mb-4">
                    <h1 className="mb-4">Customize your About page</h1>
                    <p>You are now able to add your own About page. On this page you can write about your studio, who you are, anything!</p>
                    <Button className="p-0" variant="link">Check out a preview of the page</Button>
                </div>
                {index == 1 && <div className="pb-40">
                    <h2 className="h4">Upload your image</h2>
                    <p>You first have to upload an image, for yogis to know who you are.</p>
                    <Form action="">
                        <Form.Group controlId="formFile" className="mb-3 w-50">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <Form.Control onChange={onChangePicture} type="file" />
                        </Form.Group>
                        <div className="text-end">
                            <Button variant="secondary">Cancel</Button>
                            <Button onClick={nextRoute}className="ms-2" variant="primary" type="submit">Save & continue</Button>
                        </div>
                    </Form>
                    {image && <img src={preview} />}
                </div>}
                {index == 2 && <div className="pb-40">
                    <h2 className="h4">Upload your image</h2>
                    <p>You first have to upload an image, for yogis to know who you are.</p>
                    <Form action="">
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="About our Studio" value={title} onChange={(e) => setTitle(e.target.value)} />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="lorem ipsum swag enzo" value={text} onChange={(e) => setText(e.target.value)}/>
                           
                        </Form.Group>
                        <div className="text-end">
                            <Button variant="secondary">Cancel</Button>
                            <Button className="ms-2" variant="primary" type="submit">Save & continue</Button>
                        </div>
                    </Form>
                </div>}

                <img className="position-absolute container-image" src={plant} />
            </Container>
        </div>
    )
}