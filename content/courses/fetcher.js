import courses from './index.json';

export const getAllCourse = () => {
  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c;
      a[c.id] = i;
      return a;
    }, {}),
  };
};