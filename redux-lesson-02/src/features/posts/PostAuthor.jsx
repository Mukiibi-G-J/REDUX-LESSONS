/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

const PostAuthor = (props) => {
  const users = useSelector(selectAllUser);
  const author = users.find(
    (user) => parseInt(user.id) === parseInt(props.userId)
  );
  return <span>by {author ? author.name : "Unkwon author"}</span>;
};

export default PostAuthor;
