import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 1fr;
`;

export const Sidebar = styled.div`
  background-color: #f3f4f6;

  a {
    display: block;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-item: start;
  color: #171e2d;
  font-weight: 700;
  padding: 1rem;

  &:hover {
    background-color: #1118271a;
  }

  &:active {
    background-color: #e2e4e7;
  }

  .anticon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const Content = styled.div``;

export const Header = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #f0f1f3;
  align-item: center;
  padding: 1rem;
`;

export const Logo = styled.a`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

export const Main = styled.main`
  min-height: calc(100vh - 9.5rem);
  padding: 1rem;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #f0f1f3;
`;
