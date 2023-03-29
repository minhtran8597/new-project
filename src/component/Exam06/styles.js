import styled from "styled-components";
import { Button, Input } from "antd";

// 16px = 1rem
// 20px = 1.25rem
// 24px = 1.5rem
// 32px = 2rem
// 40px = 2.5rem

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const SearchBox = styled(Input.Search)`
  width: 30%;
`;

export const ButtonCreate = styled(Button)`
  display: block;

  color: #00000;
  background-color: #ffffff;
  border-color: #00000;

  &:hover {
    color: #00000;
    background-color: #eeeeee;
    border-color: #00000;
  }
`;
