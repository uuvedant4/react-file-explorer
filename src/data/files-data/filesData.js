export const filesData = {
  name: "root",
  isFolder: true,
  subFiles: [
    {
      name: "file1.txt",
      isFolder: false,
    },
    {
      name: "file2.txt",
      isFolder: false,
    },
    {
      name: "file6.txt",
      isFolder: false,
    },
    {
      name: "file7.txt",
      isFolder: false,
    },
    {
      name: "folder1",
      isFolder: true,
      subFiles: [
        {
          name: "file3.txt",
          isFolder: false,
        },
        {
          name: "file4.txt",
          isFolder: false,
        },
        {
          name: "folder2",
          isFolder: true,
          subFiles: [
            {
              name: "file5.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },

    {
      name: "folder3",
      isFolder: true,
      subFiles: [
        {
          name: "file8.txt",
          isFolder: false,
        },
        {
          name: "file9.txt",
          isFolder: false,
        },
      ],
    },
  ],
};
