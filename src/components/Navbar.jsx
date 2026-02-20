import styled from "styled-components";
import Button from "./Button";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();  // Use the context

  return (
    <Container>
      <Title>SFA System</Title>
      <ActionContainer>
        <ModeToggleButton onClick={toggleTheme}>
          {isDarkMode ? "🌞" : "🌙"}  {/* 🌙 for Dark Mode, 🌞 for Light Mode */}
        </ModeToggleButton>
        <Button variation="delete" size="sm">
          Logout
        </Button>
      </ActionContainer>
    </Container>
  );
}

/* ===============================
   Styled Components
================================ */

const Container = styled.header`
  background-color: var(--bg-main);
  border-bottom: 1px solid var(--border-color);
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--color-brown-700);
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;  /* Adds space between the mode toggle and logout button */
`;

const ModeToggleButton = styled.button`
  font-size: 1.5rem;  /* Size of the emoji */
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;  /* Slight hover effect for feedback */
  }
`;
