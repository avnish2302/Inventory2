import styled from "styled-components";

function Table({ children }) {
  return (
    <Wrapper>                                 {/*div*/}
      <StyledTable>{children}</StyledTable>   {/*table*/}
    </Wrapper>
  );
}

function Header({ children }) {                
  return (
    <StyledHead>                               {/*thead*/}
      <tr>{children}</tr>
    </StyledHead>
  );
}

function Body({ data, render }) {
  return <tbody>{data.map(render)}</tbody>;
}

function Row({ children }) {
  return (
    <StyledRow>                                   {/*tr*/}
      {children}
    </StyledRow>
  );            
}

function Cell({ children, ...props }) {
  return (
    <StyledCell {...props}>                       {/*td*/}
      {children}
    </StyledCell>
  );
}

function Input(props) {
  return <StyledInput {...props} />;
}

function FileButton({ children, ...props }) {
  return (
    <StyledFileButton {...props}>
      {children}
    </StyledFileButton>
  );
}

function HiddenInput(props) {
  return <StyledHiddenInput {...props} />;
}

function FileInfo({ children }) {
  return <StyledFileInfo>{children}</StyledFileInfo>;
}

function FileName({ children }) {
  return <StyledFileName>{children}</StyledFileName>;
}

function ChangeLabel({ children }) {
  return <StyledChangeLabel>{children}</StyledChangeLabel>;
}

/* ===============================
   STYLED COMPONENTS
================================ */

const Wrapper = styled.div`
  overflow-x: auto;
  background-color: var(--color-grey-900);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
`;

const StyledHead = styled.thead`
  background-color: var(--color-brown-700);
  color: var(--color-grey-0);

  th {
    padding: 1rem;
    border: 1px solid var(--border-color);
    text-align: center;
  }
`;

const StyledRow = styled.tr`
  text-align: center;
  background-color: var(--bg-card);
  height: 50px;
`;

const StyledCell = styled.td`
  border: 1px solid var(--border-color);
  padding: 0.8rem 1.2rem;
  text-align: center;
  vertical-align: middle;
  word-break: break-word;
  width: 150px;
  min-width: 150px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3.4rem;
  padding: 0 1rem;
  border: 1px solid var(--color-brown-600);
  background-color: var(--bg-main);
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--color-brown-600);
  }
`;

const StyledFileButton = styled.label`
  cursor: pointer;
  background-color: var(--color-grey-200);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 1.2rem;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const StyledHiddenInput = styled.input`
  display: none;
`;

const StyledFileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`;

const StyledFileName = styled.span`
  font-size: 1.2rem;
  word-break: break-word;
`;

const StyledChangeLabel = styled.label`
  font-size: 1.2rem;
  color: var(--color-brown-600);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/* ===============================
   EXPORT
================================ */

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Input = Input;
Table.FileButton = FileButton;
Table.HiddenInput = HiddenInput;
Table.FileInfo = FileInfo;
Table.FileName = FileName;
Table.ChangeLabel = ChangeLabel;

export default Table;