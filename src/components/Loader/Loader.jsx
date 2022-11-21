import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#dd6f0f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;