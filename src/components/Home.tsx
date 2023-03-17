import LocationInput from "./LocationInput";
import Title from "./Title";

const Home = (): JSX.Element => {
  return (
    <div className="home-container">
      <div className="heading">
        <Title />
      </div>
      <div className="input-container">
        <LocationInput />
      </div>
    </div>
  );
};

export default Home;
