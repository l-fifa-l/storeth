/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CourseCard } from '@components/ui/course';

export default function List({ courses, children }) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {courses.map((course) => children(course))}
    </section>
  );
}
