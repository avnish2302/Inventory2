import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";
import { useVehicleContext } from "../contexts/VehicalContext"; // Use context
import FileUploadButton from "../components/FileUploadButton"; // Import the FileUploadButton component

export default function PunchIn() {
  const { setOwnVehicle } = useVehicleContext(); // Get setOwnVehicle from context
  const {
    register,
    handleSubmit,
    setValue, // Use setValue to set form data (for file input)
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const ownVehicle = watch("ownVehicle");

  useEffect(() => {
    if (ownVehicle === "yes") {
      setOwnVehicle(true); // Update the context when "Yes" is selected
    } else {
      setOwnVehicle(false);
    }
  }, [ownVehicle, setOwnVehicle]);

  const onSubmit = (data) => {
    console.log(data); // This will include the file if it's set correctly
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

        {/* Show other fields only if "Yes" is selected */}
        {ownVehicle === "yes" && (
          <>
            {/* Vehicle Type */}
            <FormGroup>
              <Label>Vehicle Type</Label>
              <Select {...register("vehicleType", { required: true })}>
                <option value="">Select</option>
                <option>Bike</option>
                <option>Car</option>
              </Select>
            </FormGroup>

            {/* Odometer */}
            <FormGroup>
              <Label>Odometer Reading (KM)</Label>
              <Input
                type="number"
                {...register("odometer", { required: true })}
              />
            </FormGroup>

            {/* Upload Image */}
            <FileUploadButton
              label="Upload Image"
              selectedFile={null} // No need to manage this here, FileUploadButton does it
              setFileValue={setValue} // Pass setValue to FileUploadButton
              name="file" // Name to be used for file in form
            />
          </>
        )}

        <Button type="submit" variation="primary" size="md" disabled={!isValid}>
          Punch In
        </Button>
      </Form>
    </Card>
  );
}

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