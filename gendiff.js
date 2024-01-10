import fs from 'fs';

export const getDataFromFile = (filePath, type) => {
  const filesFormat = {
    json: (fileData) => JSON.parse(fileData),
  };

  const fileData = fs.readFileSync(filePath);
  return filesFormat[type](fileData);
};

const isPropsDifferent = ([key, value], obj) => !(key in obj) || obj[key] !== value;

const isPropsEqual = ([key, value], obj) => (key in obj) && obj[key] === value;

const formatData = ()

export const getdiffObjects = (data1, data2, cb) => {
  const pairsCollData1 = Object.entries(data1);
  return pairsCollData1.filter((e) => cb(e, data2));
};

export const gendiff = (data1, data2) => {
  const deletedProps = getdiffObjects(data1, data2, isPropsDifferent);
  const unchangeProps = getdiffObjects(data1, data2, isPropsEqual);
  const addedProps = getdiffObjects(data2, data1, isPropsDifferent);
  console.log(deletedProps, addedProps);
};
