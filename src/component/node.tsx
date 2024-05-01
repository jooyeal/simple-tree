import { TreeNode } from "./types";
import classes from "../style/node.module.css";

export const Node = ({ label }: TreeNode<unknown>) => {
  return <div className={classes.container}>{label}</div>;
};
