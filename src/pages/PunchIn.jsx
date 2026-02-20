import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";

export default function PunchIn() {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const ownVehicle = watch("ownVehicle");

  const onSubmit = (data) => {
    console.log("Punch In Data:", data);
    console.log("Selected File:", selectedFile);
  };

  return (
      <Card width="42rem">
        <Title>Punch In</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Own Vehicle */}
          <FormGroup>
            <Label>Own Vehicle</Label>
            <Select {...register("ownVehicle", { required: true })}>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Select>
          </FormGroup>

          {/* Vehicle Type */}
          {ownVehicle === "yes" && (
            <FormGroup>
              <Label>Vehicle Type</Label>
              <Select {...register("vehicleType", { required: true })}>
                <option value="">Select</option>
                <option>Bike</option>
                <option>Car</option>
              </Select>
            </FormGroup>
          )}

          {/* Odometer */}
          <FormGroup>
            <Label>Odometer Reading (KM)</Label>
            <Input
              type="number"
              {...register("odometer", { required: true })}
            />
          </FormGroup>

          {/* Upload Image */}
          <FormGroup>
            <Label>Upload Image</Label>

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

                <FileActions>
                  <SmallLink>
                    Change
                    <HiddenFileInput
                      type="file"
                      onChange={(e) =>
                        setSelectedFile(e.target.files[0])
                      }
                    />
                  </SmallLink>

                  <SmallDanger
                    type="button"
                    onClick={() => setSelectedFile(null)}
                  >
                    Remove
                  </SmallDanger>
                </FileActions>
              </FileInfo>
            )}
          </FormGroup>

          <Button
            type="submit"
            variation="primary"
            size="md"
            disabled={!isValid}
          >
            Punch In
          </Button>
        </Form>
      </Card>
  );
}

/* ===============================
   Styled Components
================================ */


const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-brown-700);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FormGroup = styled.div`
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
  font-size: 1.3rem;
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

const FileActions = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const SmallLink = styled.label`
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--color-brown-600);

  &:hover {
    text-decoration: underline;
  }
`;

const SmallDanger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #dc2626;

  &:hover {
    text-decoration: underline;
  }
`;