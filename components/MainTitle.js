import react from 'react';

const MainTitle = ({ ...props }) => {
  return (
    <div
      className=" text-6xl text-center mt-4 font-mono text-cyan-800 font-semibold "
      {...props}
    ></div>
  );
};
export default MainTitle;
