import styled from "styled-components";

//styled.tên thẻ (input, p, ...)

export const Actions = styled.div`
  button {
    margin-right: 20px;

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
  }
`;
export const Country = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  h6 {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  padding-top: 100%;
`;

export const Population = styled.div`
  color: ${(props) => props.color};
  font-weight: 700;
`;
