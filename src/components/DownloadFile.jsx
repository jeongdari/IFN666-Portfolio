// Function to initiate the download of a file from a given URL
const downloadFile = (fileUrl, fileName) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
};

export default downloadFile;