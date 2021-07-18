import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./TagList";
import TagForm from "./TagForm";
import PostList from "./mc-PostList";
import CommentList from "./Comments/CommentList";
import CommentAddForm from "./Comments/CommentForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag" exact>
          <TagList />
        </Route>

        <Route path="/tag/create" exact>
          <TagForm />
        </Route>

        <Route path="/post" exact>
          <PostList />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/comment/PostId/:id">
          <CommentList />
        </Route>
        <Route path="/comment/add/:id">
          <CommentAddForm />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
