import styled from "styled-components";
import { Button } from "antd";
//styled.tên thẻ (input, p, ...)

export const Actions = styled.div`
  button {
    margin-right: 20px;
  }
`;

export const ButtonAction = styled(Button)`
  color: #00000;
  background-color: #ffffff;
  border-color: #00000;

  &:hover {
    color: #00000;
    background-color: #eeeeee;
    border-color: #00000;
  }

  &:active,
  &focus {
    color: #00000;
    background-color: blue;
    border-color: #00000;
  }
`;
