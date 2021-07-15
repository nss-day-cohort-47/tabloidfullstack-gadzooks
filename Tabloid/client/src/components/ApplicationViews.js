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

        <Route path="/category" exact>
          <CategoryList />
        </Route>

        <Route path="/tag/create" exact>
          <TagForm />
        </Route>

        <Route path="/tag/edit/:id" exact>
          <TagEdit />
        </Route>

        <Route path="/post" exact>
          <PostList />
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
