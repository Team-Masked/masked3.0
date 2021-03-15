import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import "./Signup.css";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const signup = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordConfirmRef.current.value !== passwordRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup.signup(
                emailRef.current.value,
                passwordRef.current.value
            );
        } catch (error) {
            console.log(error, signup);
            setError(error.message);
        }
        setLoading(false);
    }
    return (
        <div className="container">
            {error && (
                <div className="alert" variant="danger">
                    {error}
                </div>
            )}
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form__element">
                    <label>Email ID</label>
                    <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        required
                    ></input>
                </div>
                <div className="form__element">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        required
                    ></input>
                </div>
                <div className="form__element">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password"
                        ref={passwordConfirmRef}
                        required
                    ></input>
                </div>
                <div className="form__btns" disabled={loading}>
                    <input
                        className="btns"
                        type="submit"
                        value="Sign Up"
                    ></input>
                </div>
            </form>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in.
            </div>
            {/*<Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                     <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordConfirmRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card> */}
        </div>
    );
}

export default Signup;
