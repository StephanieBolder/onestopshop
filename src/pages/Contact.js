import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Contact() {

    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [showAddress, setShowAddress] = useState(true);

    const [phone, setPhone] = useState("");
    const [showPhone, setShowPhone] = useState(false);

    const [email, setEmail] = useState("");
    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className="mt-5 ">
        <Container className="bg-white p-10 text-start border rounded-3 position-relative d-flex justify-content-center">
        <div className="mb-4 ms-5 me-5 w-50">
            <h1 className="mb-4 fw-lighter">Customize your Contact page</h1>
            <p className="text-black-50" >You are now able to add and customize your own Contact page. You decide yourself what information you want on this page!</p>
            <Button className="fw-bolder p-0 mb-5 text-decoration-none" variant="link">Check out a preview of the page</Button>
            <Form action="">
                <div className="d-flex flex-column align-items-start">
                    <Form.Group className="" controlId="formShowAddress">
                        <Form.Check className="d-inline-flex" type="checkbox" label="Address" value={showAddress} onChange={(e) => setShowAddress(e.target.value)}/>
                    </Form.Group>
                    <div className="ms-5 w-100">
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Control type="text" placeholder="Streetname & number" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <div className="d-flex">
                            <Form.Group className="mb-3 w-50" controlId="formZipcode">
                                <Form.Control type="text" placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="formCity">
                                <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-start">
                    <Form.Group className="" controlId="formShowPhone">
                        <Form.Check className="d-inline-flex" type="checkbox" label="Telephone" value={showPhone} onChange={(e) => setShowPhone(e.target.value)}/>
                    </Form.Group>
                    <div className="ms-5 w-100">
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Control type="text" placeholder="06 12 34 56 78" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-start">
                    <Form.Group className="" controlId="formShowEmail">
                        <Form.Check className="d-inline-flex" type="checkbox" label="E-mail" value={showEmail} onChange={(e) => setShowEmail(e.target.value)}/>
                    </Form.Group>
                    <div className="ms-5 w-100">
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control type="email" placeholder="johndoe@doe.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
               
                <div className="text-end">
                    <Button variant="secondary">Cancel</Button>
                    <Button className="ms-2" variant="primary" type="submit">Save & continue</Button>
                </div>
            </Form>
        </div>
        </Container>
        </div>
    )
}