import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SalesmanApproveAddedTable() {
  const [rows, setRows] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  /* ===============================
     MOVED LOGIC HERE
  ================================ */

  const createRow = (prevRows, { planDate, salesman }) => {
    return [
      ...prevRows,
      {
        id: prevRows.length + 1,
        planDate,
        salesman,
        km: "",
        gps: "",
        status: "Pending",
      },
    ];
  };

  const updateRow = (prevRows, id, field, value) => {
    return prevRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
  };

  const deleteRow = (prevRows, id) => {
    const filtered = prevRows.filter((row) => row.id !== id);

    return filtered.map((row, index) => ({
      ...row,
      id: index + 1,
    }));
  };

  const approveAll = (prevRows) => {
    return prevRows.map((row) => ({
      ...row,
      status: "Approved",
    }));
  };

  /* =============================== */

  const onSubmit = (data) => {
    setRows((prev) => createRow(prev, data));
    reset();
  };

  const handleChange = (id, field, value) => {
    setRows((prev) => updateRow(prev, id, field, value));
  };

  const handleDelete = (id) => {
    setRows((prev) => deleteRow(prev, id));
  };

  const handleApprove = () => {
    setRows((prev) => approveAll(prev));
  };

  return (
    <>
      <Card width="100rem">
        <Section>
          <FormGrid>
            <FormGroup>
              <Label>Plan Date</Label>
              <Input
                type="date"
                {...register("planDate", { required: true })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Salesman</Label>
              <Select
                {...register("salesman", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Names
                </option>
                <option value="salesman1">Salesman 1</option>
                <option value="salesman2">Salesman 2</option>
                <option value="salesman3">Salesman 3</option>
              </Select>
            </FormGroup>
          </FormGrid>

          <Center>
            <Button
              variation="primary"
              size="md"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid}
            >
              Add
            </Button>
          </Center>
        </Section>
      </Card>

      {rows.length > 0 && (
        <Card width="100rem">
          <Section>
            <Table>
              <Table.Header>
                <th>S No.</th>
                <th>Salesman</th>
                <th>Km.</th>
                <th>GPS</th>
                <th>Action</th>
              </Table.Header>

              <Table.Body
                data={rows}
                render={(row) => (
                  <Table.Row key={row.id}>
                    <Table.Cell>{row.id}</Table.Cell>
                    <Table.Cell>{row.salesman}</Table.Cell>

                    <Table.Cell>
                      <Table.Input
                        type="number"
                        value={row.km}
                        onChange={(e) =>
                          handleChange(row.id, "km", e.target.value)
                        }
                      />
                    </Table.Cell>

                    <Table.Cell>
                      <Table.Input
                        value={row.gps}
                        onChange={(e) =>
                          handleChange(row.id, "gps", e.target.value)
                        }
                      />
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        variation="delete"
                        size="sm"
                        onClick={() => handleDelete(row.id)}
                      >
                        delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                )}
              />
            </Table>

            <Center>
              <Button
                variation="primary"
                size="md"
                onClick={handleApprove}
              >
                Approve
              </Button>
            </Center>
          </Section>
        </Card>
      )}
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-brown-700);
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--border-color);
  background-color: var(--bg-main);
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: var(--color-brown-600);
  }
`;

const Select = styled.select`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--border-color);
  background-color: var(--bg-main);
  font-size: 1.4rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--color-brown-600);
  }
`;