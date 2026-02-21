import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Card from "../components/Card";
import styled from "styled-components";
import { useVehicleContext } from "../contexts/VehicalContext";
import FileUploadButton from "../components/FileUploadButton";

export default function PunchOut() {
  const { ownVehicle } = useVehicleContext();
  const { setValue, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(Number(data.odometer));
    console.log(data)
    
  };

  const handleFileChange = (file) => {
    setValue("file", file);
  };

  return (
    <Wrapper>
      <Card width="100rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section>
            <h2>Activity Summary</h2>
            <Grid>
              <GridItem>Entered Inventory</GridItem>
              <GridItem>: 0</GridItem>
              <GridItem>Collected Cash</GridItem>
              <GridItem>: 0 Rs</GridItem>
              <GridItem>Promotion Given</GridItem>
              <GridItem>: Promotion given goes here</GridItem>
              <GridItem>Distance covered</GridItem>
              <GridItem>: __kms</GridItem>
              <GridItem>Shops Visited</GridItem>
              <GridItem>: 7 +1</GridItem>
              <GridItem>Shops not visited</GridItem>
              <GridItem>: 1</GridItem>
            </Grid>
          </Section>

          <Section>
            {/* Conditionally render Odometer and Image inputs */}
            {ownVehicle === true && (
              <>
                <FormGroup>
                  <Label>Odometer Reading (KM)</Label>
                  <Input type="number"
                   {...register("odometer", {required: true})}
                   />
                </FormGroup>
                <FileUploadButton
                  label="Upload Image"
                  selectedFile={null}
                  setFileValue={setValue}
                  name="file"
                  onFileChange={handleFileChange} // Pass the file change handler
                />
              </>
            )}
          </Section>

          <ButtonWrapper>
            <Button
              type="submit"
              variant="primary"
              size="md"
            >
              Save
            </Button>
          </ButtonWrapper>
        </form>
      </Card>
    </Wrapper>
  );
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  padding: 2.4rem;
  background-color: var(--bg-main);
  color: var(--text-primary);
`;

const Section = styled.section`
  margin-bottom: 2.4rem;
  h2{
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-brown-700);
    margin-bottom: 1.2rem;
    text-decoration: underline;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1rem;
`;

const GridItem = styled.div`
  font-size: 1.8rem;
  color: var(--color-brown-600);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Timestamp = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-zinc-400);
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 1.3rem;
  color: var(--color-grey-700);
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--bg-main);
`;
