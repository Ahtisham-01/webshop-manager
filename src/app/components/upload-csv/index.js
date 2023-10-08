// components/CsvUploader.js
import React, { useState, useRef } from "react";
import axios from "axios";
import { uploadFileIcon } from "@/app/utils/svg";
import { useRouter } from "next/navigation";

const CsvUploader = () => {
  const router =useRouter()

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];

    if (!file) return;

    uploadFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      setIsUploading(true);
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      setUploadedFileName(response.data.fileName);
    } catch (error) {
      console.error("Error uploading file:", error);
      router.push("/dashboard-progress")
    } finally {
      setIsUploading(false);
    }
  };
  return (
      <div onDrop={handleDrop} onDragOver={handleDragOver} className="w-full dropzone max-w-[355px]  py-10 mx-auto flex flex-col justify-center items-center">
        <span>{uploadFileIcon}</span>
        <span className="text-white pt-[18px] pb-6">Drag & drop files or </span>
        <button
          type="button"
          onClick={handleBrowseClick}
          className="text-white btn-color mb-7 rounded-xl px-6 py-3 w-full max-w-[186px]"
        >
          Browse
        </button>
        <p className="text-white">CSV file size should not exceed (x)mb</p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
          className="absolute"
        />
        {isUploading && (
          <div className="progress text-white">
            Uploading {uploadedFileName} - {uploadProgress}%
          </div>
        )}
      </div>
  );
};

export default CsvUploader;
