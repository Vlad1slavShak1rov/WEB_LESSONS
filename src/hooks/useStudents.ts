// hooks/useStudents.ts
import { useQuery } from '@tanstack/react-query';
import type StudentInterface from '@/types/StudentInterface';

const fetchStudents = async (): Promise<StudentInterface[]> => {
  const res = await fetch('http://localhost:3000/api/students');
  if (!res.ok) throw new Error('Ошибка загрузки студентов');
  return res.json();
};

const useStudents = () => {
  return useQuery<StudentInterface[], Error>({
    queryKey: ['students'],
    queryFn: fetchStudents,
    staleTime: 1000 * 60, // 1 минута, можно менять
  });
};

export default useStudents;
