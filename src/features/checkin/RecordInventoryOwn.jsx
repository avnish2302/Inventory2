import styled from "styled-components";
import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useRecordInventoryOwn } from "../../hooks/useRecordInventoryOwn";
import RecordInventoryOwnTable from "./RecordInventoryOwnTable";
import RecordInventoryOwnAddedTable from "./RecordInventoryOwnAddedTable";
import AddRowButton from "../../components/AddRowButton";

export default function RecordInventoryOwn() {
  const own = useRecordInventoryOwn();

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
                onClick={own.handleSaveToDatabase}
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



/*import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import { useRecordInventoryOwn } from "../../hooks/useRecordInventoryOwn";
import RecordInventoryOwnTable from "./RecordInventoryOwnTable";
import RecordInventoryOwnAddedTable from "./RecordInventoryOwnAddedTable";

export default function RecordInventoryOwn() {
  const own = useRecordInventoryOwn();

  return (
    <div className="space-y-8">
      <ShopName />

      <div className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-6">

        <RecordInventoryOwnTable own={own} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={own.handleAdd}
            disabled={!own.isValid}
          >
            Add
          </Button>
        </div>
      </div>


      {own.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-6">

          <RecordInventoryOwnAddedTable own={own} />

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={own.handleSaveToDB}
            >
              Save
            </Button>
          </div>

        </div>
      )}
    </div>
  );
}

*/