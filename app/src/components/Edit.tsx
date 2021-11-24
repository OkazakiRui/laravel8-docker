import { VFC } from 'react';
import { useParams } from 'react-router';

const Edit: VFC = () => {
  const { todoId } = useParams();

  return (
    <>
      <h2>edit</h2>
      <p>{todoId}番目 edit des</p>
    </>
  );
};
export default Edit;
