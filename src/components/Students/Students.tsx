'use client';

import useStudents from '@/hooks/useStudents';

const Students = (): React.ReactElement => {
  const { data: students = []} = useStudents();

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

import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  return (
    <div className={`${styles.Student} ${student.isDeleted ? styles['--isDeleted'] : '' }`}>
      {student.id}
      {' - '}
      {student.last_name}
      {' '}
      {student.first_name}
      {' '}
      {student.midle_name}
      {' '}
      <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};


