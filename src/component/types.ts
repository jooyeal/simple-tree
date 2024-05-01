export interface TreeNode<T = any> {
  id: string;
  parent?: string;
  label: string;
  draggable?: boolean;
  droppable?: boolean;
  opened?: boolean;
  info?: T;
}

export interface Tree {
  data: TreeNode[];
}
