import { useRef } from "react";
import {
  Form,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const FormList = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const nameValidation = (name) => {
    if (/[^a-zA-Z -]/.test(name)) return console.log("Invalid Character");
    if (name.trim().length < 3)
      return console.log("Name needs to be at least three characters long");
    else return true;
  };

  const emailValidation = (email) => {
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return console.log("Invalid E-mail Format");
    } else return true;
  };

  const ageValidation = (age) => {
    if (!/^[0-9]*$/.test(age))
      return console.log("Age must be a numeric value");
    if (age < 18) return console.log("Age must be at least 18");
    if (age > 99) return console.log("Age must be less than 99");
    else return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameValidation(nameRef.current.value) &&
      emailValidation(emailRef.current.value) &&
      ageValidation(ageRef.current.value)
    )
      return console.log("Succesfully Submitted");
  };
  return (
    <>
      <h3>Please enter the values:</h3>
      <Container className="mt-3">
        <Form data-testid="form" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Enter your name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              data-testid="name-input"
              type="text"
              ref={nameRef}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Enter your email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              data-testid="email-input"
              type="email"
              ref={emailRef}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Enter your age</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              data-testid="age-input"
              type="text"
              ref={ageRef}
              required
            />
          </InputGroup>
          <Button
            data-testid="button-test"
            size="lg"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormList;
