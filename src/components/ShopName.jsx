import styled from "styled-components";

export default function ShopName() {
  return (
    <ShopNameWrapper>
      Shop: <ShopNameText>(Shop name here...)</ShopNameText>
    </ShopNameWrapper>
  );
}

/* Styled Components */
const ShopNameWrapper = styled.p`
  color: var(--text-primary);
  
`;

const ShopNameText = styled.span`
  color: var(--text-primary);
`;