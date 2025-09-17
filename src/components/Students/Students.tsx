'use client';

import useStudents from '@/hooks/useStudents';

const Students = (): React.ReactElement => {
  const { data: students = [], isLoading, isError } = useStudents();

  if (isLoading) return <p>Загрузка студентов...</p>;
  if (isError) return <p>Ошибка при загрузке студентов</p>;

  return (
    <div className="Students">
      {students.map((stud) => (
        <h2 key={stud.id}>
          {stud.first_name} {stud.last_name} ({stud.group_id})
        </h2>
      ))}
    </div>
  );
};

export default Students;
