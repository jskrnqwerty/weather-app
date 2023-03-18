// https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=8d3b81e8ecfdf1ec8d175500301831aa
// https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=8d3b81e8ecfdf1ec8d175500301831aa
// http://api.openweathermap.org/geo/1.0/direct?q=toronto&limit=5&appid=8d3b81e8ecfdf1ec8d175500301831aa
// https://openweathermap.org/api/geocoding-api
// https://openweathermap.org/current

export type unitsType = "standard" | "metric" | "imperial";

export type locationsDataType = locationType & coordType;

export type locationType = {
  name: string;
  local_names?: localNamesType;
  country: string;
  state?: string;
};

export type forecastDataType = {
  cod: string;
  message: number;
  cnt: number;
  list: weatherDataType[];
  city: cityType;
};

type cityType = locationsDataType & {
  id: number;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type coordType = {
  lat: number;
  lon: number;
};

export type weatherDataType = {
  coord: coordType;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
    temp_kf?: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
    pod?: string;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  pop?: number;
  rain?: { "1hr"?: number; "3h"?: number };
  dt_txt?: Date;
};

type localNamesType = {
  en?: string;
  oj?: string;
  ja?: string;
  uk?: string;
  pl?: string;
  pa?: string;
  ur?: string;
  de?: string;
  hi?: string;
  he?: string;
  ps?: string;
  el?: string;
  ku?: string;
  bn?: string;
  mr?: string;
  es?: string;
  pt?: string;
  ko?: string;
  oc?: string;
  kn?: string;
  zh?: string;
  eo?: string;
  gr?: string;
  hy?: string;
  fa?: string;
  ca?: string;
  ru?: string;
  ug?: string;
  fr?: string;
  ta?: string;
  ar?: string;
};

// {
//   // dt: number;
//   // main: {
//   //   temp: number;
//   //   feels_like: number;
//   //   temp_min: number;
//   //   temp_max: number;
//   //   pressure: number;
//   //   humidity: number;
//   //   sea_level: number;
//   //   grnd_level: number;
//   //   temp_kf: number;
//   };
//   // weather: [
//   //   {
//   //     id: number;
//   //     main: string;
//   //     description: string;
//   //     icon: string;
//   //   }
//   // ];
//   // clouds: { all: number };
//   // wind: { speed: number; deg: number; gust: number };
//   // visibility: number;
//   // sys: { pod: string };
// pop: number;
// rain: { "3h": 0.58 };
// dt_txt: Date;

// },

// // https://open-meteo.com/en/docs/locationscoding-data

// export type weatherData = {
//   id: number;
//   name: string;
//   latitude: number;
//   longitude: number;
//   country: string;
//   timezone?: string;
//   elevation?: number;
//   population?: number;
//   feature_code?: string;
//   country_code?: string;
//   admin1_id?: number;
//   admin2_id?: number;
//   admin3_id?: number;
//   postcodes?: string[];
//   country_id?: number;
//   admin1?: string;
//   admin2?: string;
//   admin3?: string;
// };

// export type LocationsDataData = {
//   results: weatherData[];
//   generationtime_ms: 0.674963;
// };

// results: [
//   {
//     id: 2643743;
//     name: "London";
//     latitude: 51.50853;
//     longitude: -0.12574;
//     elevation: 25.0;
//     feature_code: "PPLC";
//     country_code: "GB";
//     admin1_id: 6269131;
//     admin2_id: 2648110;
//     timezone: "Europe/London";
//     population: 7556900;
//     country_id: 2635167;
//     country: "United Kingdom";
//     admin1: "England";
//     admin2: "Greater London";
//   },
//   {
//     id: 6058560;
//     name: "London";
//     latitude: 42.98339;
//     longitude: -81.23304;
//     elevation: 252.0;
//     feature_code: "PPL";
//     country_code: "CA";
//     admin1_id: 6093943;
//     timezone: "America/Toronto";
//     population: 346765;
//     country_id: 6251999;
//     country: "Canada";
//     admin1: "Ontario";
//   },
//   {
//     id: 4517009;
//     name: "London";
//     latitude: 39.88645;
//     longitude: -83.44825;
//     elevation: 321.0;
//     feature_code: "PPLA2";
//     country_code: "US";
//     admin1_id: 5165418;
//     admin2_id: 4517365;
//     admin3_id: 4517024;
//     timezone: "America/New_York";
//     population: 10060;
//     postcodes: ["43140"];
//     country_id: 6252001;
//     country: "United States";
//     admin1: "Ohio";
//     admin2: "Madison";
//     admin3: "City of London";
//   },
//   {
//     id: 4298960;
//     name: "London";
//     latitude: 37.12898;
//     longitude: -84.08326;
//     elevation: 378.0;
//     feature_code: "PPLA2";
//     country_code: "US";
//     admin1_id: 6254925;
//     admin2_id: 4297480;
//     timezone: "America/New_York";
//     population: 8126;
//     postcodes: ["40741", "40742", "40743", "40744", "40745"];
//     country_id: 6252001;
//     country: "United States";
//     admin1: "Kentucky";
//     admin2: "Laurel";
//   },
//   {
//     id: 4119617;
//     name: "London";
//     latitude: 35.32897;
//     longitude: -93.25296;
//     elevation: 116.0;
//     feature_code: "PPL";
//     country_code: "US";
//     admin1_id: 4099753;
//     admin2_id: 4127100;
//     admin3_id: 4105863;
//     timezone: "America/Chicago";
//     population: 1046;
//     postcodes: ["72847"];
//     country_id: 6252001;
//     country: "United States";
//     admin1: "Arkansas";
//     admin2: "Pope";
//     admin3: "Clark Township";
//   },
//   {
//     id: 4707414;
//     name: "London";
//     latitude: 30.67685;
//     longitude: -99.57645;
//     elevation: 519.0;
//     feature_code: "PPL";
//     country_code: "US";
//     admin1_id: 4736286;
//     admin2_id: 4703256;
//     timezone: "America/Chicago";
//     population: 180;
//     postcodes: ["76854"];
//     country_id: 6252001;
//     country: "United States";
//     admin1: "Texas";
//     admin2: "Kimble";
//   },
//   {
//     id: 4812926;
//     name: "London";
//     latitude: 38.19455;
//     longitude: -81.36872;
//     elevation: 196.0;
//     feature_code: "PPL";
//     country_code: "US";
//     admin1_id: 4826850;
//     admin2_id: 4810630;
//     timezone: "America/New_York";
//     postcodes: ["25126"];
//     country_id: 6252001;
//     country: "United States";
//     admin1: "West Virginia";
//     admin2: "Kanawha";
//   },
//   {
//     id: 5367815;
//     name: "London";
//     latitude: 36.47606;
//     longitude: -119.44318;
//     elevation: 91.0;
//     feature_code: "PPL";
//     country_code: "US";
//     admin1_id: 5332921;
//     admin2_id: 5403789;
//     timezone: "America/Los_Angeles";
//     population: 1869;
//     country_id: 6252001;
//     country: "United States";
//     admin1: "California";
//     admin2: "Tulare";
//   },
//   {
//     id: 4030939;
//     name: "London Village";
//     latitude: 1.98487;
//     longitude: -157.47502;
//     elevation: 8.0;
//     feature_code: "PPL";
//     country_code: "KI";
//     admin1_id: 4030940;
//     admin2_id: 7521593;
//     timezone: "Pacific/Kiritimati";
//     population: 1829;
//     country_id: 4030945;
//     country: "Kiribati";
//     admin1: "Line Islands";
//     admin2: "Kiritimati";
//   },
//   {
//     id: 982298;
//     name: "London";
//     latitude: -24.81927;
//     longitude: 31.04765;
//     elevation: 698.0;
//     feature_code: "PPL";
//     country_code: "ZA";
//     admin1_id: 1085595;
//     admin2_id: 8299316;
//     admin3_id: 8347523;
//     timezone: "Africa/Johannesburg";
//     country_id: 953987;
//     country: "South Africa";
//     admin1: "Mpumalanga";
//     admin2: "Ehlanzeni District";
//     admin3: "Bushbuckridge";
//   }
// ];
// generationtime_ms: 0.674963;
// };
