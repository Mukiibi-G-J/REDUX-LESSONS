import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

// eslint-disable-next-line react/prop-types
function ReactionButton({ post }) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          console.log({ postId: post.id, reaction: name });
          // eslint-disable-next-line react/prop-types
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
        }}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
}
export default ReactionButton;
