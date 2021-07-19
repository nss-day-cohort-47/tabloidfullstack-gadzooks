import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import TagEdit from "./Tag/TagEdit";
import CategoryList from "./CategoryList";
<<<<<<< HEAD
import CategoryForm from "./CategoryForm";
import TagForm from "./TagForm";
=======
import TagForm from "./Tag/TagForm";
>>>>>>> main
import PostList from "./mc-PostList";
import CommentList from "./Comments/CommentList";
import CommentAddForm from "./Comments/CommentForm";
import { CurrentUserPostList } from "./CurrentUserPostList";
import { PostDetails } from "./PostDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post" exact>
          <PostList />
        </Route>

<<<<<<< HEAD
        <Route path="/tag/create" exact>
          <TagForm />
        </Route>

        <Route path="/category" exact>
          <CategoryList />
        </Route>

        <Route path="/category/create" exact>
          <CategoryForm />
=======
        <Route exact path="/post/:postId(\d+)">
          <PostDetails />
        </Route>

        <Route path="/post/myposts" exact>
          <CurrentUserPostList />
>>>>>>> main
        </Route>

        <Route path="/category" exact>
          <CategoryList />
        </Route>

        <Route path="/tag" exact>
          {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag/create" exact>
          {isLoggedIn ? <TagForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag/edit/:id" exact>
          {isLoggedIn ? <TagEdit /> : <Redirect to="/login" />}
        </Route>

        <Route path="/comment/PostId/:id" exact>
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/comment/add/:id" exact>
          {isLoggedIn ? <CommentAddForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

      </Switch>
    </main>
  );
};
