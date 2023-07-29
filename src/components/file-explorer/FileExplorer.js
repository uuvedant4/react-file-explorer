import "./FileExplorer.css";
import FolderIcon from "../../assests/folder-svgrepo-com.svg";
import FileIcon from "../../assests/file-zipper-svgrepo-com.svg";
import { useState } from "react";

const FileExplorer = ({ filesData }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  if (filesData.isFolder)
    return (
      <div className="file-explorer">
        <div onClick={handleExpand} className="file-name">
          <img src={FolderIcon} />
          <span>{filesData.name}</span>
        </div>
        <div className={`sub-files ${!expand && "inactive"}`}>
          {filesData.subFiles.map((files, indx) => {
            return <FileExplorer key={indx} filesData={files} />;
          })}
        </div>
      </div>
    );
  else {
    return (
      <div className="only-file">
        <img src={FileIcon} />
        <span>{filesData.name}</span>
      </div>
    );
  }
};

export default FileExplorer;
