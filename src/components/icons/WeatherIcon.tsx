import { BsPatchQuestionFill as MissingIcon } from "react-icons/bs";
import { weatherTypeType, weatherDescriptionType } from "../types/Types";
import SvgClearDay from "../assets/animated/ClearDay";
import SvgPartlyCloudyDay from "../assets/animated/PartlyCloudyDay";
import SvgOvercast from "../assets/animated/Overcast";
import SvgMist from "../assets/animated/Mist";
import SvgSnow from "../assets/animated/Snow";
import SvgRain from "../assets/animated/Rain";
import SvgSmoke from "../assets/animated/more/Smoke";
import SvgHaze from "../assets/animated/Haze";

type WeatherIconPropsType = {
  size: string;
  weatherType: weatherTypeType;
  weatherDescription: weatherDescriptionType;
};

const WeatherIcon = ({
  size,
  weatherType,
  weatherDescription,
}: WeatherIconPropsType): JSX.Element => {
  var icon: any;

  switch (weatherType && weatherDescription) {
    case "Clouds" && "clear sky":
    case "Clear" && "few clouds":
      icon = (
        <SvgClearDay
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Clouds" && "scattered clouds":
    case "Clouds" && "broken clouds":
      icon = (
        <SvgPartlyCloudyDay
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Clouds" && "overcast clouds":
      icon = (
        <SvgOvercast
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Mist" && "mist":
      icon = (
        <SvgMist
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Rain" && "light rain":
    case "Rain" && "moderate rain":
    case "Rain" && "heavy intensity rain":
      icon = (
        <SvgRain
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Snow" && "snow":
      icon = (
        <SvgSnow
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Smoke" && "smoke":
      icon = (
        <SvgSmoke
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    case "Haze" && "haze":
      icon = (
        <SvgHaze
          title={weatherType}
          titleId={weatherDescription}
          height={size}
          width={size}
        />
      );
      break;
    default:
      icon = <MissingIcon size={size} />;
  }

  return <>{icon}</>;
};

export default WeatherIcon;
