import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostById } from '../features/blogSlice';

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);


  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (!post) return <div>Post not found!</div>;

  return (
    <div className="p-4 border rounded shadow-md">
      {/* <LazyLoad height={200} offset={100}>
        <img src={``} alt={post.title} className="w-full h-48 object-cover rounded" />
      </LazyLoad> */}
      <h3 className="text-lg font-bold mt-2">{post.title}</h3>
      <p className="text-sm text-gray-600">{post.body}</p>
    </div>
  );
};

export default BlogDetail;