import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Login() {
  return (
    <Page>
      <Card>
        <Content>
        <Heading>Login</Heading>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button variation="primary" size="lg">Login</Button>
        </Content>
      </Card>
    </Page>
  );
}

/* ===============================
   Styled Components
================================ */

const Content = styled.div`
display : flex;
flex-direction : column;
`

const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Slight warm tint for better separation */
  background-color: var(--color-brown-50);
`;
/*
const Card = styled.div`
  background-color: var(--bg-card);
  padding: 3.2rem;
  width: 34rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-brown-200);

  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
*/
const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-brown-700);
`;

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--color-grey-0);
  color: var(--text-primary);

  &:focus {
    outline: 2px solid var(--color-brown-500);
    outline-offset: 2px;
  }
`;

/*
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius-sm);
  background-color: var(--color-brown-600);
  color: white;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-brown-500);
  }
`;

*/