import { SimpleTree, TreeNode } from "./component";

function App() {
  const data: TreeNode[] = [
    {
      id: "1",
      parent: "0",
      label: "hello",
    },
    {
      id: "2",
      parent: "0",
      label: "hello",
    },
    {
      id: "3",
      parent: "0",
      label: "hello",
    },
    {
      id: "4",
      parent: "0",
      label: "hello",
    },
  ];
  return (
    <div>
      <SimpleTree data={data} />
    </div>
  );
}

export default App;
