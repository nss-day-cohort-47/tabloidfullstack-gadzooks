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
<<<<<<< HEAD
import PostForm from "./mc-PostForm";
=======
import CommentList from "./Comments/CommentList";
import CommentAddForm from "./Comments/CommentForm";
>>>>>>> main
import { CurrentUserPostList } from "./CurrentUserPostList";
import { PostDetails } from "./PostDetails";
import PostEdit from "./PostEdit";

export default function ApplicationViews({ isLoggedIn }) {
<<<<<<< HEAD

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

                <Route exact path="/post" exact>
                    <PostList />
                </Route>

                <Route path="/post/create" exact>
                    <PostForm />
                </Route>

                <Route exact path="/post/:postId(\d+)">
                    <PostDetails />
                </Route>

                <Route exact path="/post/edit/:postId(\d+)">
                    <PostEdit />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/post/myposts" exact>
                    <CurrentUserPostList />
                </Route>
            </Switch>
        </main>
    );

=======
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
>>>>>>> main
};
