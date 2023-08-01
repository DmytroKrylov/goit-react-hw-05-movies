import styled from 'styled-components';
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Item = styled.li`
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  background-color: white;
  padding-bottom: 8px;
`;
export const Title = styled.h2`
  margin-left: 5px;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;
