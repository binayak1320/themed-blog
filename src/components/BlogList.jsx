import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import BlogCard from './BlogCard';
import { fetchPosts, setSearch } from '../features/blogSlice';
import SkeletonBlogCard from './SkeletonBlogCard';

const BlogList = () => {
  const dispatch = useDispatch();
  const { posts, search, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="p-2 border rounded mb-4"
      />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {status === 'loading'
          ? Array(6).fill(0).map((_, index) => <SkeletonBlogCard key={index} />)
          : status === 'failed'
          ? <p className="text-red-500">Error: {error}</p>
          : filteredPosts.map(post => <BlogCard key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default BlogList;