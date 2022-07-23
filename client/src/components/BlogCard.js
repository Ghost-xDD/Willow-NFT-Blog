import './BlogCard.css';
import { useNavigate } from 'react-router-dom';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const BlogCard = ({ text, title, ownerOf, externalUrl }) => {
  const length = 100;
  const trimmedString = text.length > 100 ? text.substring(0, length) : text;

  const account = `${ownerOf.slice(0, 4)}...${ownerOf.slice(38)}`;

  const navigate = useNavigate();

  const clickHandler = () => {
    const lastSegment = externalUrl.split('/').pop();
    navigate(`/blog/${lastSegment}`);
  };

  return (
    <div className="blog" onClick={clickHandler}>
      <div className="blog_leftSide">
        <div className="blogger">
          <span className="blogger_name">{account}</span>
          <span className="blogger_date">Mar 21</span>
        </div>
        <div className="blog_title">
          <h3>{title}</h3>
        </div>
        <div className="blog_content">
          <p>{trimmedString}...</p>
          <div className="desc">
            <div>5 min read .&nbsp; From your network</div>
            &nbsp;&nbsp;&nbsp;
            <MdOutlineBookmarkAdd className="ico" />
            &nbsp;
            <AiOutlineMinusCircle className="ico" />
          </div>
        </div>
      </div>
      <div className="blog_rightSide">
        <div>
          <img
            className="blog_image"
            src="https://gateway.moralisipfs.com/ipfs/QmZnNS69QCnYF4ZdDsG86dQwZMgdL9zPNMERk67uKibGV4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
