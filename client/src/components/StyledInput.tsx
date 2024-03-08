import styled from "styled-components";

const Container = styled.div``;
const InputGroup = styled.div``;
const InputLabel = styled.label``;
const Input = styled.input``;

const StyledInput = (label: string) => {
  return (
    <InputGroup>
      <InputLabel>{label}</InputLabel>
      <Input />
    </InputGroup>
  );
};

export default StyledInput;
