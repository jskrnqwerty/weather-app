import { MdArrowBackIosNew as GoBackIcon } from "react-icons/md";

type BackArrowPropsType = {
  handleClick: () => void;
};

const BackArrow = ({ handleClick }: BackArrowPropsType) => {
  return (
    <>
      <GoBackIcon
        size="1.5rem"
        onClick={
          handleClick
          // setShowHome(true);
          // setShowWeather(false);
        }
      />
    </>
  );
};

export default BackArrow;
