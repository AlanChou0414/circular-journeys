import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'
import { userInfo } from 'components/userInfo/UserInfo'
import './NavResult.scss'
import Banner from 'images/Blog/blog-banner.jpeg'
import Card3 from 'components/Cards/Card3'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
import B001 from 'images/Blog/B001.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const NavResult = () => {
  const [post, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const currentPost = post.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const { tagId } = useParams()
  const { userData } = userInfo()

  useEffect(() => { getData() }, [tagId])
  function getData() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/tag/${tagId}`)
    .then(r => { setPost(r.data) })
    .catch(error => console.log(error))
  }

  return (
    <>
      <div>
        <div className='blog-banner'>
          <img className='blog-banner-img' src={Banner} alt="Banner"></img>
          <div className='blog-title'>
            <h2>高雄旅遊日誌</h2>
            {tagId === 'popular' && <h4># 熱門</h4>}
            {tagId === 'latest' && <h4># 最新</h4>}
            {tagId !== 'popular' && tagId !== 'latest' && <h4>{post[0] && `#${post[0].tag}`}</h4>}
          </div>
        </div>
        <div className='page-body'>
          <div className='blog-container row justify-content-md-center justify-content-xl-between'>
            <div className='col-md-10 col-lg-8 col-xl-7 text-center'>
              <div className='row'>
                {currentPost.map((v, i) => {
                  return (
                    <div className='blog-post col-md-6' key={v.post_id}>
                      {/* 問題：無法依照時間排版 */}
                      <Card3
                        postId={v.post_id}
                        userMemberId={userData.member_id}
                        img={v.cover}
                        tags={v.tags}
                        memberId={v.member_id}
                        memberName={v.user_nickname}
                        title={v.post_title}
                        createAt={v.create_at}
                        likes={v.total_likes} />
                    </div>
                  )
                })}
                <div className='blog-pagination'>
                  <Pagination
                    current={currentPage}
                    total={post.length}
                    pageSize={4}
                    onChange={page => setCurrentPage(page)}
                  />
                </div>
              </div>
            </div>
            <div className='blog-aside col-md-10 col-lg-4'>
              <div className='blog-aside-item'>
                <form className='blog-search'>
                  <input className='blog-input' placeholder="Search">
                  </input>
                  <button className='blog-button' type="submit">
                    <BiSearch className='search-icon' />
                  </button>
                </form>
              </div>
              <div className='blog-aside-item'>
                <BlogCategory />
              </div>
              <div className='blog-aside-item'>
                <TagsCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavResult
