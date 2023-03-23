import LocationInput from "./LocationInput";
import Title from "./Title";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="main-content">
        <div className="heading">
          <Title />
        </div>
        <div className="input-container">
          <LocationInput />
        </div>
      </div>
      <div className="extra-content"></div>
    </>
  );
};

export default Home;
