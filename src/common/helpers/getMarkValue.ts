import { Mark } from '@material-ui/core';

export const getMarkValue = (marks: Mark[], label: string): number => {
  const index = marks.findIndex((mark) => mark.label === label);
  return marks[index]?.value || 0;
};
