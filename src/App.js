import "./App.css";
import FileExplorer from "./components/file-explorer/FileExplorer";
import { filesData } from "./data/files-data/filesData";

function App() {
  return (
    <div className="App">
      <FileExplorer filesData={filesData} />
    </div>
  );
}

export default App;
