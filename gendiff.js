import fs from 'fs';
import collection from 'lodash/collection.js';

export const getDataFromFile = (filePath, type) => {
  const filesFormat = {
    json: (fileData) => JSON.parse(fileData),
  };

  const fileData = fs.readFileSync(filePath);
  return filesFormat[type](fileData);
};

const isPropsDifferent = ([key, value], obj) => !(key in obj) || obj[key] !== value;

const isPropsEqual = ([key, value], obj) => (key in obj) && obj[key] === value;

const formatData = (coll, delimetr = ' ') => coll.map(([key, value]) => ({ key, value, delimetr }));

export const getdiffObjects = (data1, data2, cb) => {
  const pairsCollData1 = Object.entries(data1);
  return pairsCollData1.filter((e) => cb(e, data2));
};

export const gendiff = (data1, data2) => {
  const deletedProps = formatData(getdiffObjects(data1, data2, isPropsDifferent), '-');
  const unchangeProps = formatData(getdiffObjects(data1, data2, isPropsEqual));
  const addedProps = formatData(getdiffObjects(data2, data1, isPropsDifferent), '+');

  const formattedDiff = collection
    .orderBy([...deletedProps, ...unchangeProps, ...addedProps], ['key'], ['asc'])
    .map(({ key, value, delimetr }) => `  ${delimetr} ${key} ${value}`);

  return `{\n${formattedDiff.join('\n')}\n}`;
};
