import { Routes, Route } from "react-router-dom";

import AdminPosts from "../../../Components/AdminPosts/AdminPosts";
import PostsEdit from "../PostsEdit/PostsEdit";

const Posts = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={"/"} element={<AdminPosts />} />

        <Route path={"/edit/:postId"} element={<PostsEdit />} />
        <Route path={"/create"} element={<PostsEdit />} />
      </Routes>
    </main>
  );
};

export default Posts;
