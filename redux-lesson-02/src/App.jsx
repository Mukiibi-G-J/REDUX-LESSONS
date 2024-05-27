import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <div></div>
      <h1>Lessons redux tooklit </h1>
      <div className="card">
        <AddPostForm />
        <PostsList />
      </div>
    </>
  );
}

export default App;
