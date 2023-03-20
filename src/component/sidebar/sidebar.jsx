import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Tin tức</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
