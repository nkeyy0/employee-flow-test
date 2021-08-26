import { Mark } from '@material-ui/core';

export const getMarkValue = (marks: Mark[], label: string): number => {
  const foundMark = marks.find((mark) => mark.label === label);
  return foundMark?.value || 0;
};
