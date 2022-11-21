import { useMedia } from 'react-use';
import { DeleteIconStyled } from '../Icons.styled';

const DeleteIcon = () => {
  const isLapTop = useMedia('(min-width: 900px)');

  return <DeleteIconStyled size={isLapTop ? 24 : 20} />;
};

export default DeleteIcon;
