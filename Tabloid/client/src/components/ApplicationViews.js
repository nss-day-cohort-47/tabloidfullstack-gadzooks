import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import TagEdit from "./Tag/TagEdit";
import CategoryList from "./CategoryList";
import TagForm from "./Tag/TagForm";
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

        <Route exact path="/post/:postId(\d+)">
          <PostDetails />
        </Route>

        <Route path="/post/myposts" exact>
          <CurrentUserPostList />
        </Route>

        <Route path="/category" exact>
          <CategoryList />
        </Route>

        <Route path="/tag" exact>
          <TagList />
        </Route>

        <Route path="/tag/create" exact>
          <TagForm />
        </Route>

        <Route path="/tag/edit/:id" exact>
          <TagEdit />
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
