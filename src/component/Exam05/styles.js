import styled from "styled-components";
import { Button } from "antd";

export const ButtonCreate = styled(Button)`
  display: block;
  margin-bottom: 20px;
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
