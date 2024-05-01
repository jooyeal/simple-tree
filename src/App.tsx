import { SimpleTree, TreeNode } from "./component";

function App() {
  const data: TreeNode[] = [
    {
      id: "1",
      label: "hello",
    },
    {
      id: "2",
      label: "hello",
    },
    {
      id: "3",
      label: "hello",
    },
    {
      id: "4",
      label: "hello",
    },
    {
      id: "5",
      parent: "1",
      label: "hello",
    },
    {
      id: "6",
      parent: "1",
      label: "hello",
    },
    {
      id: "7",
      parent: "2",
      label: "hello",
    },
    {
      id: "8",
      parent: "3",
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
