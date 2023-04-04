import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { User, Image, Role, Name } from "./styles";

const AuthUser = ({ children }) => {
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            label: <a onClick={onLogout}>Logout</a>,
          },
        ],
      }}
    >
      <User>
        <Image src="" />
        <div>
          <Role>Admin</Role>
          <Name>Tran Thien Minh</Name>
        </div>
      </User>
    </Dropdown>
  );
};

export default AuthUser;
