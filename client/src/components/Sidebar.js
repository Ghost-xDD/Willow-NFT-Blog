import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { AiOutlineHome, AiOutlineTags, AiOutlineBell } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io';
import Logout from '@mui/icons-material/Logout';
import { SiBlockchaindotcom } from 'react-icons/si';

const Sidebar = () => {
  const { logout } = useMoralis();

  const logOut = async () => {
    await logout();
  };

  return (
    <>
      <div className="siderContent">
        <SiBlockchaindotcom className="logoBg" />
        <div className="menu">
          <Link to="/" className="link">
            <div className="menuItems">
              <AiOutlineHome />
            </div>
          </Link>
          <Link to="/myBlogs" className="link">
            <div className="menuItems">
              <AiOutlineTags />
            </div>
          </Link>
          <Link to="/newStory" className="link">
            <div className="menuItems">
              <BsPencilSquare />
            </div>
          </Link>
          {/* <Link to="/newStory" className="link">
            <div className="menuItems">
              <AiOutlineBell />
            </div>
          </Link> */}
        </div>
        <div className="logout" onClick={logOut}>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
