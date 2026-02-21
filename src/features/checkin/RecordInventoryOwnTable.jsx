import styled from "styled-components";
import Button from "../../components/Button";

export default function RecordInventoryOwnTable({ own }) {
  return (
    <Wrapper>
      {/* CATEGORY */}
      <Select
        value={own.category}
        onChange={(e) => own.setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option>Beer</option>
        <option>Whisky</option>
      </Select>

      {/* PRODUCT + ADD ROW */}
      <RowWrapper>
        <Select
          value={own.product}
          onChange={(e) => own.setProduct(e.target.value)}
        >
          <option value="">Select Product</option>
          <option>Kibba 650 ml</option>
          <option>Kibba 500</option>
        </Select>

        <Button
          variant="neutral"
          size="md"
          onClick={own.handleAddRow}
          disabled={!own.category || !own.product}
        >
          Add Row
        </Button>
      </RowWrapper>

      {/* INPUT TABLE */}
      {own.rows.length > 0 && (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr className="header-row">
                <Th>Product</Th>
                <Th>Receipt</Th>
                <Th colSpan="2">Cases</Th>
                <Th colSpan="2">Bottles</Th>
                <Th>Action</Th>
              </tr>

              <tr className="sub-header-row">
                <Th>—</Th>
                <Th>—</Th>
                <Th>Warm</Th>
                <Th>Cold</Th>
                <Th>Warm</Th>
                <Th>Cold</Th>
                <Th>—</Th>
              </tr>
            </thead>

            <tbody>
              {own.rows.map((r, i) => (
                <tr key={i}>
                  <Td>{r.product}</Td>
                  {["receipt", "casesWarm", "casesCold", "bottlesWarm", "bottlesCold"].map((field) => (
                    <Td key={field}>
                      <Input
                        type="number"
                        value={r[field]}
                        onChange={(e) => own.handleChange(i, field, e.target.value)}
                      />
                    </Td>
                  ))}
                  <Td>
                    <Button
                      variation="delete"
                      size="sm"
                      onClick={() => own.handleDeleteRow(i)}
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

const Select = styled.select`
  background-color: var(--color-grey-000);
  color: var(--color-grey-900);
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--border-color);
  width: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 1rem;
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