import styled from "styled-components";
import Button from "../components/Button"

// Styled component for the button wrapper
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function AddRowButton({ onClick }) {
  return (
    <Wrapper>
      <Button size="sm" variation="neutral" onClick={onClick}>
        Add Row
      </Button>
    </Wrapper>
  );
}