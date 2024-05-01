import { createContext, useState } from "react";
import { TreeNode } from "../component";

export interface TreeDataControl {
  treeData: TreeNode[];
  changeData: (newData: TreeNode[]) => void;
}

export const TreeDataControlContext = createContext<TreeDataControl | null>(
  null
);

const TreeDataControlProvider = ({
  children,
  initialData,
}: {
  initialData: TreeNode[];
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<TreeNode[]>(initialData);

  const changeData = (newData: TreeNode[]) => {
    setData(newData);
  };

  return (
    <TreeDataControlContext.Provider
      value={{
        treeData: data,
        changeData,
      }}
    >
      {children}
    </TreeDataControlContext.Provider>
  );
};
export default TreeDataControlProvider;
