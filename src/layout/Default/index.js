import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";

import {
  Header,
  Footer,
  Main,
  Content,
  Sidebar,
  Layout,
  Logo,
  MenuItem,
} from "./styles";
import { UserOutlined, BorderLeftOutlined } from "@ant-design/icons";

const DefaulLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar>
        <Logo>Green Academy</Logo>
        <Link to="/dashboard">
          <MenuItem>
            <BorderLeftOutlined />
            Dashboard
          </MenuItem>
        </Link>

        <Link to="/students">
          <MenuItem>
            <UserOutlined />
            Students
          </MenuItem>
        </Link>
      </Sidebar>

      <Content>
        <Header>
          <AuthUser />
        </Header>
        <Main> {children} </Main>

        <Footer>Power by Minh</Footer>
      </Content>
    </Layout>
  );
};

export default DefaulLayout;
