import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import RecordInventoryOwn from "../features/checkin/RecordInventoryOwn";
import RecordInventoryCompetitor from "../features/checkin/RecordInventoryCompetitor";
import ShowCase from "../features/checkin/Showcase";
import Menu from "../features/checkin/Menu";
import Promotions from "../features/checkin/Promotions";
import Collection from "../features/checkin/Collection";
import AssetAssignment from "../features/checkin/AssetAssignment";
import Main from "../features/checkin/Main";

export default function CheckIn() {
  const navigate = useNavigate();
  const { tab = "basic" } = useParams();

  const tabs = [
    { key: "main", label: "Main" },
    { key: "record-inventory-own", label: "Record Inventory Own" },
    { key: "record-inventory-competitor", label: "Record Inventory Competitor" },
    { key: "showcase", label: "Showcase" },
    { key: "menu", label: "Menu" },
    { key: "asset-assignment", label: "Asset Assignment" },
    { key: "promotions", label: "Promotions" },
    { key: "collection", label: "Collection" },
  ];

  return (
    <Wrapper>
      <Title>Check-In</Title>

      <Tabs>
        {tabs.map((t) => (
          <TabButton
            key={t.key}
            $active={tab === t.key}
            data-active={tab === t.key}
            onClick={() => navigate(`/checkin/${t.key}`)}
          >
            {t.label}
          </TabButton>
        ))}
      </Tabs>

    
        {tab === "main" && <Main/>}
        {tab === "record-inventory-own" && <RecordInventoryOwn />}
        {tab === "record-inventory-competitor" && <RecordInventoryCompetitor />}
        {tab === "showcase" && <ShowCase />}
        {tab === "menu" && <Menu />}
        {tab === "asset-assignment" && <AssetAssignment />}
        {tab === "promotions" && <Promotions />}
        {tab === "collection" && <Collection />}
    
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.6rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-brown-700);
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
`;

const TabButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1.3rem;
  transition: all 0.2s ease;
  background-color: ${({ $active }) =>
    $active ? "var(--color-brown-100)" : "var(--color-grey-200)"};
  color: ${({ $active }) =>
    $active ? "var(--color-brown-700)" : "var(--text-primary)"};

  ${({ $active }) =>
    $active &&
    `
    font-weight: 500;
  `}

  &:not([data-active="true"]):hover {
    background-color: var(--color-brown-100);
  }
`;


