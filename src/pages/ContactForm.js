import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import plant from '../assets/Plant.png'
import { getFromStore, storeAsJson } from "../utils/storage";
import { useNavigate } from "react-router";

export default function ContactForm({ index = 1 }) {
    const CONTACT = 'contact';
    const dataFromStore = getFromStore(CONTACT) ?? {};

    const navigate = useNavigate();
    const [address, setAddress] = useState(dataFromStore.address ?? "");
    const [zipcode, setZipcode] = useState(dataFromStore.zipcode ?? "");
    const [city, setCity] = useState(dataFromStore.city ?? "");
    const [showAddress, setShowAddress] = useState(dataFromStore.showAddress ?? true);

    const [phone, setPhone] = useState(dataFromStore.phone ?? "");
    const [showPhone, setShowPhone] = useState(dataFromStore.showPhone ?? false);

    const [email, setEmail] = useState(dataFromStore.email ?? "");
    const [showEmail, setShowEmail] = useState(dataFromStore.showEmail ?? false);

    const [title, setTitle] = useState(dataFromStore.title ?? "");
    const [text, setText] = useState(dataFromStore.text ?? "");

    const storeData = () => {
        let data = dataFromStore;
        if (index == 1) {
            let newData = { address, zipcode, city, showAddress, phone, showPhone, email, showEmail };
            data = { ...data, ...newData };
        }

        if (index == 2) {
            let newData = { title, text };
            data = { ...data, ...newData };
        }
        storeAsJson(CONTACT, data);
    }

    const nextRoute = () => {
        storeData();
        if (index == 1) {
            navigate('/contact-form/text');
        }
        if (index == 2) {
            navigate('/more', {
                state: {
                    alert: {
                        text: 'You have succesfully created your Contact page!',
                        link: {
                            label: 'Check out how the page looks for your yogis!',
                            route: '/contact-page?as=yogi'
                        }
                    }
                }
            })
        }

    }

    return (
        <div className="mt-10 ">
            <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex justify-content-center">
                <div className="mb-4 ms-5 me-5 w-50">
                    <h1 className="mb-4 fw-lighter mt-5 ">Customize your Contact page</h1>
                    <p className="text-black-50" >You are now able to add and customize your own Contact page. You decide yourself what information you want on this page!</p>
                    <Button className="fw-bolder p-0 mb-5 text-decoration-none" variant="link">Check out a preview of the page</Button>

                    <p className="fw-bold mt-5">Decide the information on the page</p>
                    <p className="text-black-50 mb-5 " >Click on the information you want on your contact page. This will be displayed above the contact form.</p>
                    {index == 1 && (
                        <Form className="mt-3 ">
                            <div className="d-flex flex-column align-items-start">
                                <Form.Group className="" controlId="formShowAddress">
                                    <Form.Check className="d-inline-flex " type="checkbox" label="Address" checked={showAddress} onChange={(e) => setShowAddress(e.target.checked)} />
                                </Form.Group>
                                <div className="ms-5 w-100">
                                    <Form.Group className="mb-3" controlId="formAddress">
                                        <Form.Control type="text" placeholder="Streetname & number" disabled={!showAddress} value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </Form.Group>
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 w-50 me-1" controlId="formZipcode">
                                            <Form.Control type="text" placeholder="Zipcode" disabled={!showAddress} value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 w-50 ms-1 " controlId="formCity">
                                            <Form.Control type="text" placeholder="City" disabled={!showAddress} value={city} onChange={(e) => setCity(e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <Form.Group className="" controlId="formShowPhone">
                                    <Form.Check className="d-inline-flex mt-2" type="checkbox" label="Telephone" checked={showPhone} value={showPhone} onChange={(e) => setShowPhone(e.target.checked)} />
                                </Form.Group>
                                <div className="ms-5 w-100">
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Control type="text" placeholder="06 12 34 56 78" disabled={!showPhone} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <Form.Group className="" controlId="formShowEmail">
                                    <Form.Check className="d-inline-flex mt-2" type="checkbox" checked={showEmail} label="E-mail" value={showEmail} onChange={(e) => setShowEmail(e.target.checked)} />
                                </Form.Group>
                                <div className="ms-5 w-100">
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Control type="email" placeholder="johndoe@doe.com" disabled={!showEmail} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end -me-4 mt-5 mb-5 ">
                                <Button className="rounded-pill p-3 fw-bolder " variant="secondary">Cancel</Button>
                                <Button className="rounded-pill p-3 ms-3 fw-bolder" onClick={nextRoute} variant="primary" type="submit">Save & continue</Button>
                            </div>
                        </Form>)}
                    {index == 2 && (
                        <div>
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
                                    <Button className="rounded-pill p-3 fw-bolder " variant="secondary">Cancel</Button>
                                    <Button onClick={nextRoute} className="rounded-pill p-3 ms-3 fw-bolder " variant="primary" type="submit">Save & publish</Button>
                                </div>
                            </Form>
                        </div>
                    )}
                </div>
                <img className="position-absolute container-image w-25 ms-10 " src={plant} />
            </Container>
        </div>
    )
}