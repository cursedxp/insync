import React from "react";
import Image from "next/image";

import {
  FiFile,
  FiFileText,
  FiImage,
  FiVideo,
  FiMusic,
  FiDownload,
  FiSearch,
  FiMoreVertical,
} from "react-icons/fi";
import {
  AiFillFile,
  AiFillFileExcel,
  AiFillFileWord,
  AiFillFilePdf,
} from "react-icons/ai";

const getFileIcon = (fileType) => {
  switch (fileType.toLowerCase()) {
    case "pdf":
      return <AiFillFilePdf className="w-8 h-8 text-red-500" />;
    case "doc":
    case "docx":
      return <AiFillFileWord className="w-8 h-8 text-blue-500" />;
    case "xls":
    case "xlsx":
      return <AiFillFileExcel className="w-8 h-8 text-green-500" />;
    case "jpg":
    case "png":
    case "gif":
      return <FiImage className="w-8 h-8 text-purple-500" />;
    case "mp4":
    case "mov":
      return <FiVideo className="w-8 h-8 text-orange-500" />;
    case "mp3":
    case "wav":
      return <FiMusic className="w-8 h-8 text-yellow-500" />;
    case "txt":
      return <FiFileText className="w-8 h-8 text-gray-500" />;
    default:
      return <FiFile className="w-8 h-8 text-gray-500" />;
  }
};

export default function Files() {
  const [files, setFiles] = React.useState([
    {
      fileName: "Project_Requirements.pdf",
      size: "2.5 MB",
      received: "-",
      addedDate: "5th Feb, 2024",
      addedBy: "John Doe",
      avatar: "/images/users/user-1.jpg",
      type: "pdf",
    },
    {
      fileName: "Meeting_Notes.docx",
      size: "1.2 MB",
      received: "4th Feb, 2024",
      addedDate: "-",
      addedBy: "Jane Smith",
      avatar: "/images/users/user-2.jpg",
      type: "docx",
    },
    {
      fileName: "Budget_2024.xlsx",
      size: "3.8 MB",
      received: "-",
      addedDate: "3rd Feb, 2024",
      addedBy: "Mike Johnson",
      avatar: "/images/users/user-3.jpg",
      type: "xlsx",
    },
  ]);

  return (
    <div className="w-full p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-medium"></div>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 rounded-md text-gray-400 flex items-center gap-2 cursor-pointer">
            <FiSearch className="w-4 h-4 ml-2" />
            <input
              type="text"
              placeholder="Search files..."
              className="bg-transparent border-none outline-none w-[200px] text-sm placeholder-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
            Add File
          </button>
        </div>
      </div>

      <div className="flex-1 rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                File Name
              </th>
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                Size
              </th>
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                Received
              </th>
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                Added Date
              </th>
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                Added By
              </th>
              <th className="text-left py-6 px-4 text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="hover:cursor-pointer hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {getFileIcon(file.type)}
                    <span className="text-sm">{file.fileName}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{file.size}</td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {file.received}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {file.addedDate}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image
                        src={file.avatar}
                        alt={file.addedBy}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {file.addedBy}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FiDownload className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FiMoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
