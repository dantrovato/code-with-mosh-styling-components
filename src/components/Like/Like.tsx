import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };
  return (
    <>
      {liked ? (
        <FcLike size="30" onClick={toggle} />
      ) : (
        <AiOutlineHeart size="30" onClick={toggle} />
      )}
    </>
  );
};

export default Like;
