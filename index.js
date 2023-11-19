// import posts data
import { posts } from "./postsData.js";

const createPost = (posts) => {
  let toRender = "";
  posts.forEach((post) => {
    toRender += `
                    <section class="post">
                        <div class="post-header">
                            <img class="post-profile-img" src="${post.avatar}"/>
                            <div class="header-conatiner">
                                <h2 class="post-username">${post.name}</h2>
                                <p class="location">${post.location}</p>
                            </div>                   
                        </div>
                        <img class="post-img" src=${post.post} alt="post by ${post.username}"/>
                        <div class="icon-container">
                            <img class="icon heart-icon" src="./images/icon-heart.png" />
                            <img class="icon comment-icon" src="./images/icon-comment.png" />
                            <img class="icon dm-icon" src="./images/icon-dm.png" />
                        </div>
                        <p class="num-likes"><span>${post.likes}</span> likes</p>
                        <p class="post-text"><span>${post.username}</span>  ${post.comment}</p>
                    </section>`;
  });

  return toRender;
};

const render = () => {
  const toRenderOnPage = createPost(posts);
  document.getElementsByClassName("posts-container")[0].innerHTML =
    toRenderOnPage;
};

render();
