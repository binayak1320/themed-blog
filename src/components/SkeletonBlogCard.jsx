const SkeletonBlogCard = () => {
    return (
      <div className="p-4 border rounded animate-pulse bg-gray-200">
        <div className="h-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
      </div>
    );
  };
  
  export default SkeletonBlogCard;