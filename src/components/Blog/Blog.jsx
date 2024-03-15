import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {id, title, cover, author, author_img, reading_time, posted_date, hashtags,} = blog;
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
      <div className='flex justify-between mb-4'>
        <div className='flex'>
          <img className='w-16' src={author_img} alt="" />
         <div className='ml-6'>
          <h3 className="text-2xl">{author}</h3>
          <p>{posted_date}</p>
         </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
           onClick={() => handleAddToBookmark(blog)}
           className='ml-2 text-2xl text-red-600'
           ><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{hashtags.map((has, idx) => <span key={idx} > <a href="">#{has}</a></span>)}</p>
      <button
       className='text-2xl text-purple-700 font-bold underline' onClick={()=> handleMarkAsRead(id, reading_time)}
      >Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;