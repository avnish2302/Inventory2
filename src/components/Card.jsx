import styled from "styled-components";

function Card({ children, width = "40rem", ...props }) {
  return (
    <StyledCard $width={width} {...props}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
width: ${({ $width }) => $width};
  max-width: 100%;

  margin: 0 auto;
  margin-top : 20px;

  background-color: var(--bg-card);
  border-radius: var(--radius-lg);

  /* Combined box-shadow for all sides with brown shade */
  box-shadow: 0px 0px 12px rgba(139, 69, 19, 0.6);

  padding: 3.2rem;
`;

export default Card;