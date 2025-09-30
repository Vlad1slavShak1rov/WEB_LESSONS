// hooks/useStudents.ts

import type StudentInterface from '@/types/StudentInterface';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


const fetchStudents = async (): Promise<StudentInterface[]> => {
  const res = await fetch('http://localhost:3000/api/students');
  if (!res.ok) throw new Error('Ошибка загрузки студентов');
  return res.json();
};

const deleteStudent = async (id: number): Promise<void> => {
  const res = await fetch(`http://localhost:3000/api/students/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Ошибка удаления студента');
};

const useStudents = () => {
 const queryClient = useQueryClient();

  const query = useQuery<StudentInterface[], Error>({
    queryKey: ['students'],
    queryFn: fetchStudents,
    staleTime: 1000 * 60,
  });

  const mutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(['students']);
    },
  });

  return {
    ...query,
    deleteStudent: mutation.mutateAsync, 
  };
};

export default useStudents;
