import styled from 'styled-components';
export const Form = styled.form`
  padding: 50px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const ButtonSearch = styled.button`
  background: white;

  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  color: black;
  display: block;
  float: left;
  font-size: 18px;
  font-weight: 600;

  margin: 0;
  padding: 8px 16px;
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 16px;
  height: 40px;
  width: 500px;
  background: white;
  outline: none;
  border-radius: 8px;
  border: 2px solid black;
  font-size: 20px;

  padding: 8px 16px;

  &::placeholder {
    color: #151414;
    font-size: 20px;
  }
`;
