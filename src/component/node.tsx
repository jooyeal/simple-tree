import { TreeNode } from "./types";
import classes from "../style/node.module.css";
import { useDrag } from "react-dnd";

export const Node = (props: {
  data: TreeNode<unknown>;
  onClick?: () => void;
}) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "NODE",
    item: props,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview}>hello</div>
  ) : (
    <div className={classes.container} ref={drag}>
      {props.data.label}
    </div>
  );
};
