import { Button, Form } from "react-bootstrap";
import { useState } from "react";

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
        <div className="mb-4">
            <h1 className="mb-4">Customize your About page</h1>
            <p>You are now able to add your own About page. On this page you can write about your studio, who you are, anything!</p>
            <Button className="p-0 mb-5" variant="link">Check out a preview of the page</Button>
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
                                <Form.Control className="" type="text" placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="formCity">
                                <Form.Control className="" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
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
    )
}