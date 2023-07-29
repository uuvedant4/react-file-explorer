import { useState } from "react";
import "./App.css";
import FileExplorer from "./components/file-explorer/FileExplorer";
import { filesData } from "./data/files-data/filesData";
import { useInsertNode } from "./hooks/useInsertNode";

function App() {
  const [explorerData, setExplorerData] = useState(filesData);

  const insertNode = useInsertNode();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <FileExplorer handleInsertNode={handleInsertNode} filesData={filesData} />
    </div>
  );
}

export default App;
