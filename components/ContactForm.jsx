import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { Button } from "./Button";
import { Container } from "./Layout";

const StyledInput = styled.input`
    height: 56px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin: 3px 0;
    padding: 12px;
    color: ${props => props.theme.palette.primary};
    background: rgb(24, 24, 24);

    &:focus{
        border: 1px solid rgba(255, 255, 255, 0.3);
        outline: none;
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin: 3px 0;
    padding: 12px;
    color: ${props => props.theme.palette.primary};
    background: rgb(24, 24, 24);

    &:focus{
        border: 1px solid rgba(255, 255, 255, 0.3);
        outline: none;
    }
`;

export default function ContactForm() {
  const [state, handleSubmit] = useForm("process.env.NEXT_PUBLIC_FORM");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Container padding="12px 0">
        <form onSubmit={handleSubmit}>
        <StyledInput id="name" name="name" placeholder="Name*" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <StyledInput id="email" type="email" name="email" placeholder="Email*" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <StyledTextArea id="message" name="message" placeholder="Message*" rows={8} required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <Container direction="row" spacing={12} alignItems="center" margin="12px 0">
            <Button type="submit" width="160px" disabled={state.submitting}>
                Send Message
            </Button>
            <ValidationError errors={state.errors} />
        </Container>
        </form>
    </Container>
  );
}