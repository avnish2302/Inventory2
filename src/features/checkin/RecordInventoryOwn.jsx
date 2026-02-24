import styled from "styled-components";
import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useRecordInventoryOwn } from "../../hooks/useRecordInventoryOwn";
import RecordInventoryOwnTable from "./RecordInventoryOwnTable";
import RecordInventoryOwnAddedTable from "./RecordInventoryOwnAddedTable";
import AddRowButton from "../../components/AddRowButton";
import { useInventoryContext } from "../../contexts/InventoryContext";

export default function RecordInventoryOwn() {
  const own = useRecordInventoryOwn();
  const {calculateAndSetInventory} = useInventoryContext()

  return (
    <Wrapper>
      <ShopName />
      <AddRowButton onClick={own.addRow} />

      <Card width="100rem">
        <Section>
          <RecordInventoryOwnTable own={own} />

          <Center>
            <Button
              variation="primary"
              size="md"
              onClick={own.handleAdd}
              disabled={!own.isValid}
            >
              Add
            </Button>
          </Center>
        </Section>
      </Card>

      {own.saved.length > 0 && (
        <Card width="100rem">
          <Section>
            <RecordInventoryOwnAddedTable own={own} />

            <Center>
              <Button
                variation="primary"
                size="md"
                onClick={()=>{own.handleSaveToDB()
                  calculateAndSetInventory(own.saved)
                }}
              >
                Save
              </Button>
            </Center>
          </Section>
        </Card>
      )}
    </Wrapper>
  );
}

/* =============================== */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;