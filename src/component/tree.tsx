import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Tree } from "./types";
import { Node } from "./node";
import { useContext } from "react";
import TreeDataControlProvider, {
  TreeDataControlContext,
} from "../provider/treeDataControlProvider";

const TreeContainer = () => {
  const treeDataControl = useContext(TreeDataControlContext);

  return (
    <div>
      {treeDataControl?.treeData.map((node) => (
        <Node key={node.id} data={{ ...node }} />
      ))}
    </div>
  );
};

export const SimpleTree = ({ data }: Tree) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TreeDataControlProvider initialData={data}>
        <TreeContainer />
      </TreeDataControlProvider>
    </DndProvider>
  );
};
