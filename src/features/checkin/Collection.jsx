import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ShopName from "../../components/ShopName";

export default function Collection() {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    reset();
    setSelectedFile(null);
  };

  return (
    <>
      <ShopName />

      <Card width="100rem">
        <Title>Collection</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Label>Invoice #</Label>
            <Input {...register("invoice", { required: true })} />
          </FieldGroup>

          <FieldGroup>
            <Label>Remarks</Label>
            <Input {...register("remarks", { required: true })} />
          </FieldGroup>

          <FieldGroup>
            <Label>Payment Mode</Label>
            <Select {...register("paymentMode", { required: true })}>
              <option>Cash</option>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label>Amount</Label>
            <Input
              type="number"
              {...register("amount", { required: true })}
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Image</Label>

            {!selectedFile ? (
              <FileButton>
                Choose File
                <HiddenFileInput
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </FileButton>
            ) : (
              <FileInfo>
                <FileName>{selectedFile.name}</FileName>
                <FileButton>
                  Change
                  <HiddenFileInput
                    type="file"
                    onChange={(e) =>
                      setSelectedFile(e.target.files[0])
                    }
                  />
                </FileButton>
              </FileInfo>
            )}
          </FieldGroup>

          <Button
            type="submit"
            variation="primary"
            size="md"
            disabled={!isValid}
            style={{ width: "100%" }}
          >
            Save
          </Button>
        </Form>
      </Card>
    </>
  );
}

/* ===============================
   Styled Components
================================ */

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-brown-700);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--bg-main);
`;

const Select = styled.select`
  padding: 0.8rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--bg-main);
`;

const FileButton = styled.label`
  cursor: pointer;
  background-color: var(--color-grey-200);
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-sm);
  width: fit-content;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FileName = styled.span`
  font-size: 1.2rem;
  color: var(--text-secondary);
  word-break: break-all;
`;