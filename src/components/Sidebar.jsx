import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <Container $isOpen={isOpen}>
      <TopSection>
        {isOpen && <Logo>SFA</Logo>}

        <ToggleButton onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? "<-" : "->"}
        </ToggleButton>
      </TopSection>

      <Nav>
        {links.map((item) => (
          <StyledNavLink
            key={item.to}
            to={item.to}
            $isOpen={isOpen}
          >
            {isOpen && item.label}
          </StyledNavLink>
        ))}
      </Nav>
    </Container>
  );
}

/* ===============================
   Styled Components
================================ */

const Container = styled.div`
  width: ${({ $isOpen }) => ($isOpen ? "24rem" : "6.4rem")};
  height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-primary);
  padding: 2rem;
  border-right: 1px solid var(--border-color);
  transition: width 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-brown-700);
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1.4rem;

  &:hover {
    color: var(--color-brown-600);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) =>
    $isOpen ? "flex-start" : "center"};

  padding: ${({ $isOpen }) =>
    $isOpen ? "0.8rem 1.2rem" : "0.8rem"};

  border-radius: var(--radius-sm);
  font-size: 1.4rem;
  transition: all 0.2s ease;

  color: var(--text-secondary);

  ${({ $isOpen }) =>
    $isOpen &&
    `
 &.active {
  background-color: var(--color-brown-100);
  color: var(--color-brown-700);
  font-weight: 500;
}

&:not(.active):hover {
  background-color: var(--color-brown-50);
  color: var(--color-brown-700);
}
  `}
`;

/* ===============================
   Navigation Data
================================ */

const links = [
  { to: "/punchin", label: "Punch In" },
  { to: "/checkin", label: "Check In" },
  { to: "/checkout", label: "Check Out" },
  { to: "/inventory", label: "Inventory" },
  { to: "/routes", label: "Routes" },
];