'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

const Students = (): React.ReactElement => {
  const { data: students = [], deleteStudent } = useStudents();

  const handleDelete = async (id: number) => {
  try {
    await deleteStudent(id); 
    } catch (err) {
      console.error('Ошибка при удалении студента', err);
    }
  };

  return (
    <div className="Students">
      {students.map((stud: StudentInterface) => (
        <Student key={stud.id} student={stud} onDelete={handleDelete} />
      ))}
    </div>
  );
};

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
      <button onClick={onDeleteHandler} className={styles.DeleteButton}>
        Удалить
      </button>
    </div>
  );
};

export default Students;