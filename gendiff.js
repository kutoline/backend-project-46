import fs from 'fs';

const filesFormat = {
  json: (fileData) => JSON.parse(fileData),
};

export const getDataFromFile = (filePath, type) => {
  const fileData = fs.readFileSync(filePath);
  return filesFormat[type](fileData);
};

const gendiff = (file1, file2) => {
  console.log(file1, file2);
};

export default gendiff;
