import { Container, Button, Form } from "react-bootstrap";
import plant from '../assets/Plant.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromStore, storeAsJson } from "../utils/storage";

export default function AboutForm({ index }) {
    const ABOUT = 'about';
    const dataFromStore = getFromStore(ABOUT);
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState(dataFromStore.preview ?? "");
    const [title, setTitle] = useState(dataFromStore.title ?? "");
    const [text, setText] = useState(dataFromStore.text ?? "");
    let navigate = useNavigate();
    const nextRoute = () => {
        storeData();
        if (index == 1) {
            navigate('/about-form/text');

        }
        if (index == 2) {
            navigate('/more', {
                state: {
                    alert: {
                        text: 'You have succesfully created your About page!',
                        link: {
                            label: 'Check out how the page looks for your yogis!',
                            route: '/about-page?as=yogi'
                        }
                    }
                }
            })
        }
    }


    const storeData = () => {
        let data = getFromStore(ABOUT) ?? {};
        if (index == 1) {
            if (image != "") {
                data.preview = preview;
            }
        }

        if (index == 2) {
            data.text = text;
            data.title = title;
        }

        storeAsJson(ABOUT, data);
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
        <div className="mt-10">
            <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex justify-content-center" style={{ width: "70%" }}>
                <div className="mb-4 ms-5 me-5" style={{ width: "70%" }}>
                    <div><h1 className="mb-4 fw-lighter mt-5">Customize your About page</h1>
                        <p className="text-black-50">You are now able to add your own About page. On this page you can write about your studio, who you are, anything!</p>
                        <Button className="fw-bolder p-0 mb-5 text-decoration-none" variant="link">Check out a preview of the page</Button>
                    </div>
                    {index == 1 && <div className="">
                        <p className="fw-bold mt-5">Upload your image</p>
                        <p className="text-black-50 mb-4 " >You first have to upload an image, for yogis to know who you are.</p>
                        <Form action="">
                            <Form.Group controlId="formFile" className="mb-5">
                                {/* <Form.Label>Default file input example</Form.Label> */}
                                <Form.Control onChange={onChangePicture} type="file" />
                            </Form.Group>
                            <div className="d-flex justify-content-center img-thumbnail">
                                {image && <img src={preview} />}
                            </div>
                            <div className="d-flex justify-content-end -me-4 mt-5 mb-5 ">
                                <Button href="/more" className="secundary-button">Cancel</Button>
                                <Button className="primary-button" onClick={nextRoute} type="submit">Save & continue</Button>
                            </div>
                        </Form>

                    </div>}
                    {index == 2 && <div>
                        <p className="fw-bold mt-5">Add your own text</p>
                        <p className="text-black-50 mb-4 " >For some extra information, add extra text to the page. This can be anything.</p>
                        <Form action="">
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="About our Studio" value={title} onChange={(e) => setTitle(e.target.value)} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formText">
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea" rows={6} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur. Excepteur sint occaecat cupidatat." value={text} onChange={(e) => setText(e.target.value)} />
                            </Form.Group>
                            <div className="d-flex justify-content-end -me-4 mt-5 mb-5 ">
                                <Button href="/more" className="secundary-button">Cancel</Button>
                                <Button className="primary-button" onClick={nextRoute} type="submit">Save & continue</Button>
                            </div>
                        </Form>
                    </div>}
                </div>
            </Container>
        </div>
    )
}