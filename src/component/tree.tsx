import { Tree } from "./types";
import { Node } from "./node";

export const SimpleTree = ({ data }: Tree) => {
  return (
    <div>
      {data.map((node) => (
        <Node key={node.id} {...node} />
      ))}
    </div>
  );
};
