import styled from "styled-components";
import Button from "../../components/Button";

export default function RecordInventoryOwnAddedTable({ own }) {
  return (
    <Wrapper>
      {/* INPUT TABLE */}
      {own.saved.length > 0 && (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <Th>Product</Th>
                <Th>Receipt</Th>
                <Th>Cases Warm</Th>
                <Th>Cases Cold</Th>
                <Th>Bottles Warm</Th>
                <Th>Bottles Cold</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {own.saved.map((r, i) => (
                <tr key={i}>
                  <Td>{r.product}</Td>

                  {["receipt", "casesWarm", "casesCold", "bottlesWarm", "bottlesCold"].map((field) => (
                    <Td key={field}>
                      {own.editIndex === i ? (
                        <Input
                          type="number"
                          value={r[field]}
                          onChange={(e) =>
                            own.handleSavedChange(i, field, e.target.value)
                          }
                        />
                      ) : (
                        r[field]
                      )}
                    </Td>
                  ))}

                  <Td>
                    {own.editIndex === i ? (
                      <Button
                        variation="saveEdit"
                        size="sm"
                        onClick={own.handleSaveEdit}
                      >
                        Save Edit
                      </Button>
                    ) : (
                      <Button
                        variation="edit"
                        size="sm"
                        onClick={() => own.setEditIndex(i)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      variation="delete"
                      size="sm"
                      onClick={() => own.handleDeleteSaved(i)}
                    >
                      Delete
                    </Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}
    </Wrapper>
  );
}

/* =============================== STYLED COMPONENTS ============================== */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  background-color: var(--bg-main);
`;

const Th = styled.th`
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--border-color);
  background-color: var(--color-brown-700);
  color: var(--color-grey-0);
`;

const Td = styled.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--border-color);
  background-color: var(--bg-card);
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--color-brown-600);
  }
`;