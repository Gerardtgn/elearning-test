
import img1 from '../../assets/img/blog/img1.jpg';
import img2 from  '../../assets/img/blog/img2.jpg';
import img3 from '../../assets/img/blog/img3.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
export default function Blog(){
    return(
        <>
            <div class="blog-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">News and Blogs</span>
                    <h2>Our Latest Publications</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="single-blog-1.html" class="d-block">
                                    <img src={img1} alt="image"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <a href="blog-1.html" class="category">Education</a>
                                <h3><a href="single-blog-1.html">University Admissions Could Face Emergency Controls</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src={user1} class="rounded-circle" alt="image"/>
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li><i class='flaticon-calendar'></i> April 30, 2025</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="single-blog-1.html" class="d-block">
                                    <img src={img2} alt="image"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <a href="blog-1.html" class="category">Online</a>
                                <h3><a href="single-blog-1.html">Online Learning Can Prepare Students For A Fast-Changing</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src={user2} class="rounded-circle" alt="image"/>
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li><i class='flaticon-calendar'></i> April 29, 2025</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="single-blog-1.html" class="d-block">
                                    <img src={img3} alt="image"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <a href="blog-1.html" class="category">Learning</a>
                                <h3><a href="single-blog-1.html">As Learning Moves Online, Trigger Warnings Must Too</a></h3>
                                <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src={user3} class="rounded-circle" alt="image"/>
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li><i class='flaticon-calendar'></i> April 28, 2025</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="blog-post-info">
                            <p>Get into details now?​ <a href="blog-1.html">View all posts</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}