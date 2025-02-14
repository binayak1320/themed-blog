import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ post }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/post/${post.id}`} className="text-blue-500">Read more</Link>
    </div>
  );
};

BlogCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default BlogCard;