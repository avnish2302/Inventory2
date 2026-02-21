import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FileUploadButton = ({ label, selectedFile, onFileChange, setFileValue, name }) => {
  const [file, setFile] = useState(selectedFile); // Handle internal state for the file

  useEffect(() => {
    if (setFileValue) {
      setFileValue(name, file); // Update the form state when file changes
    }
  }, [file, setFileValue, name]);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    if (onFileChange) {
      onFileChange(newFile); // Call onFileChange handler passed as prop
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (onFileChange) {
      onFileChange(null); // Remove the file in the parent component
    }
  };

  return (
    <FormGroup>
      <Label>{label}</Label>
      {!file ? (
        <FileButton>
          Choose File
          <HiddenFileInput type="file" onChange={handleFileChange} />
        </FileButton>
      ) : (
        <FileInfo>
          <FileName>{file.name}</FileName>
          <FileActions>
            <SmallLink>
              Change
              <HiddenFileInput type="file" onChange={handleFileChange} />
            </SmallLink>
            <SmallDanger type="button" onClick={handleRemoveFile}>
              Remove
            </SmallDanger>
          </FileActions>
        </FileInfo>
      )}
    </FormGroup>
  );
};

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

const Label = styled.label`
  font-size: 1.3rem;
  color: var(--text-secondary);
`;

export default FileUploadButton;