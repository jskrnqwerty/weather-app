// https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=8d3b81e8ecfdf1ec8d175500301831aa
// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=8d3b81e8ecfdf1ec8d175500301831aa
// https://openweathermap.org/forecast5
// http://api.openweathermap.org/geo/1.0/direct?q=toronto&limit=5&appid=8d3b81e8ecfdf1ec8d175500301831aa
// https://openweathermap.org/api/geocoding-api

export type weatherOrForecastType = "weather" | "forecast";

export type unitsType = "standard" | "metric" | "imperial";

export type locationsDataType = locationType & coordType;

export type locationType = {
  name: string;
  local_names?: localNamesType;
  country: string;
  state?: string;
  deleteThisLater?: string;
  deleteThisLater2?: string;
};

export type forecast5DataType = {
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

export type weatherTypeType =
  | "Rain"
  | "Clouds"
  | "Snow"
  | "Clear"
  | "Mist"
  | "Smoke"
  | "Haze";
export type weatherDescriptionType =
  | "clear sky"
  | "few clouds"
  | "overcast clouds"
  | "broken clouds"
  | "scattered clouds"
  | "light rain"
  | "moderate rain"
  | "heavy intensity rain"
  | "mist"
  | "snow"
  | "smoke"
  | "haze";

export type weatherDataType = {
  coord: coordType;
  weather: [
    {
      id: number;
      main: weatherTypeType;
      description: weatherDescriptionType;
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

// const forecast = {
//   cod: "200",
//   message: 0,
//   cnt: 40,
//   list: [
//     {
//       dt: 1679605200,
//       main: {
//         temp: 284,
//         feels_like: 283.49,
//         temp_min: 284,
//         temp_max: 284.04,
//         pressure: 992,
//         sea_level: 992,
//         grnd_level: 991,
//         humidity: 90,
//         temp_kf: -0.04,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10n",
//         },
//       ],
//       clouds: {
//         all: 75,
//       },
//       wind: {
//         speed: 4.99,
//         deg: 252,
//         gust: 11.9,
//       },
//       visibility: 10000,
//       pop: 1,
//       rain: {
//         "3h": 2.03,
//       },
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-23 21:00:00",
//     },
//     {
//       dt: 1679616000,
//       main: {
//         temp: 283.29,
//         feels_like: 282.68,
//         temp_min: 281.87,
//         temp_max: 283.29,
//         pressure: 993,
//         sea_level: 993,
//         grnd_level: 993,
//         humidity: 89,
//         temp_kf: 1.42,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 82,
//       },
//       wind: {
//         speed: 5.96,
//         deg: 235,
//         gust: 12.8,
//       },
//       visibility: 10000,
//       pop: 0.8,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-24 00:00:00",
//     },
//     {
//       dt: 1679626800,
//       main: {
//         temp: 281.79,
//         feels_like: 279.02,
//         temp_min: 280.69,
//         temp_max: 281.79,
//         pressure: 995,
//         sea_level: 995,
//         grnd_level: 994,
//         humidity: 87,
//         temp_kf: 1.1,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 58,
//       },
//       wind: {
//         speed: 5.04,
//         deg: 237,
//         gust: 12.26,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-24 03:00:00",
//     },
//     {
//       dt: 1679637600,
//       main: {
//         temp: 280.24,
//         feels_like: 277.21,
//         temp_min: 280.24,
//         temp_max: 280.24,
//         pressure: 999,
//         sea_level: 999,
//         grnd_level: 995,
//         humidity: 88,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03d",
//         },
//       ],
//       clouds: {
//         all: 28,
//       },
//       wind: {
//         speed: 4.75,
//         deg: 222,
//         gust: 12.68,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-24 06:00:00",
//     },
//     {
//       dt: 1679648400,
//       main: {
//         temp: 283.5,
//         feels_like: 282.55,
//         temp_min: 283.5,
//         temp_max: 283.5,
//         pressure: 999,
//         sea_level: 999,
//         grnd_level: 996,
//         humidity: 75,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 60,
//       },
//       wind: {
//         speed: 6.16,
//         deg: 222,
//         gust: 12.85,
//       },
//       visibility: 10000,
//       pop: 0.17,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-24 09:00:00",
//     },
//     {
//       dt: 1679659200,
//       main: {
//         temp: 285.54,
//         feels_like: 284.61,
//         temp_min: 285.54,
//         temp_max: 285.54,
//         pressure: 999,
//         sea_level: 999,
//         grnd_level: 996,
//         humidity: 68,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 64,
//       },
//       wind: {
//         speed: 7.73,
//         deg: 226,
//         gust: 14.37,
//       },
//       visibility: 10000,
//       pop: 0.75,
//       rain: {
//         "3h": 0.87,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-24 12:00:00",
//     },
//     {
//       dt: 1679670000,
//       main: {
//         temp: 285.14,
//         feels_like: 284.22,
//         temp_min: 285.14,
//         temp_max: 285.14,
//         pressure: 999,
//         sea_level: 999,
//         grnd_level: 996,
//         humidity: 70,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 92,
//       },
//       wind: {
//         speed: 8.03,
//         deg: 231,
//         gust: 15.07,
//       },
//       visibility: 10000,
//       pop: 1,
//       rain: {
//         "3h": 0.88,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-24 15:00:00",
//     },
//     {
//       dt: 1679680800,
//       main: {
//         temp: 282.79,
//         feels_like: 279.56,
//         temp_min: 282.79,
//         temp_max: 282.79,
//         pressure: 999,
//         sea_level: 999,
//         grnd_level: 996,
//         humidity: 79,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 89,
//       },
//       wind: {
//         speed: 7.25,
//         deg: 230,
//         gust: 14.45,
//       },
//       visibility: 10000,
//       pop: 1,
//       rain: {
//         "3h": 0.91,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-24 18:00:00",
//     },
//     {
//       dt: 1679691600,
//       main: {
//         temp: 281.8,
//         feels_like: 278.4,
//         temp_min: 281.8,
//         temp_max: 281.8,
//         pressure: 1000,
//         sea_level: 1000,
//         grnd_level: 997,
//         humidity: 79,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10n",
//         },
//       ],
//       clouds: {
//         all: 94,
//       },
//       wind: {
//         speed: 6.86,
//         deg: 233,
//         gust: 13.73,
//       },
//       visibility: 10000,
//       pop: 0.2,
//       rain: {
//         "3h": 0.16,
//       },
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-24 21:00:00",
//     },
//     {
//       dt: 1679702400,
//       main: {
//         temp: 281.69,
//         feels_like: 277.87,
//         temp_min: 281.69,
//         temp_max: 281.69,
//         pressure: 1000,
//         sea_level: 1000,
//         grnd_level: 997,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10n",
//         },
//       ],
//       clouds: {
//         all: 95,
//       },
//       wind: {
//         speed: 8.21,
//         deg: 238,
//         gust: 17.28,
//       },
//       visibility: 10000,
//       pop: 0.36,
//       rain: {
//         "3h": 0.24,
//       },
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-25 00:00:00",
//     },
//     {
//       dt: 1679713200,
//       main: {
//         temp: 280.29,
//         feels_like: 276.45,
//         temp_min: 280.29,
//         temp_max: 280.29,
//         pressure: 1001,
//         sea_level: 1001,
//         grnd_level: 998,
//         humidity: 77,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10n",
//         },
//       ],
//       clouds: {
//         all: 38,
//       },
//       wind: {
//         speed: 6.89,
//         deg: 239,
//         gust: 15.8,
//       },
//       visibility: 10000,
//       pop: 0.32,
//       rain: {
//         "3h": 0.11,
//       },
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-25 03:00:00",
//     },
//     {
//       dt: 1679724000,
//       main: {
//         temp: 280.57,
//         feels_like: 276.58,
//         temp_min: 280.57,
//         temp_max: 280.57,
//         pressure: 1002,
//         sea_level: 1002,
//         grnd_level: 998,
//         humidity: 76,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 56,
//       },
//       wind: {
//         speed: 7.61,
//         deg: 234,
//         gust: 16.52,
//       },
//       visibility: 10000,
//       pop: 0.16,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-25 06:00:00",
//     },
//     {
//       dt: 1679734800,
//       main: {
//         temp: 282.69,
//         feels_like: 279.27,
//         temp_min: 282.69,
//         temp_max: 282.69,
//         pressure: 1003,
//         sea_level: 1003,
//         grnd_level: 1000,
//         humidity: 67,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 97,
//       },
//       wind: {
//         speed: 7.81,
//         deg: 252,
//         gust: 15.52,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-25 09:00:00",
//     },
//     {
//       dt: 1679745600,
//       main: {
//         temp: 285.74,
//         feels_like: 284.57,
//         temp_min: 285.74,
//         temp_max: 285.74,
//         pressure: 1004,
//         sea_level: 1004,
//         grnd_level: 1001,
//         humidity: 58,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 70,
//       },
//       wind: {
//         speed: 8.01,
//         deg: 256,
//         gust: 15.27,
//       },
//       visibility: 10000,
//       pop: 0.26,
//       rain: {
//         "3h": 0.19,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-25 12:00:00",
//     },
//     {
//       dt: 1679756400,
//       main: {
//         temp: 285.93,
//         feels_like: 284.8,
//         temp_min: 285.93,
//         temp_max: 285.93,
//         pressure: 1005,
//         sea_level: 1005,
//         grnd_level: 1002,
//         humidity: 59,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 29,
//       },
//       wind: {
//         speed: 6.77,
//         deg: 267,
//         gust: 12.38,
//       },
//       visibility: 10000,
//       pop: 0.8,
//       rain: {
//         "3h": 0.28,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-25 15:00:00",
//     },
//     {
//       dt: 1679767200,
//       main: {
//         temp: 283.54,
//         feels_like: 282.49,
//         temp_min: 283.54,
//         temp_max: 283.54,
//         pressure: 1006,
//         sea_level: 1006,
//         grnd_level: 1003,
//         humidity: 71,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 46,
//       },
//       wind: {
//         speed: 5.05,
//         deg: 258,
//         gust: 8.8,
//       },
//       visibility: 10000,
//       pop: 0.72,
//       rain: {
//         "3h": 0.44,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-25 18:00:00",
//     },
//     {
//       dt: 1679778000,
//       main: {
//         temp: 281.73,
//         feels_like: 280.31,
//         temp_min: 281.73,
//         temp_max: 281.73,
//         pressure: 1006,
//         sea_level: 1006,
//         grnd_level: 1003,
//         humidity: 76,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 58,
//       },
//       wind: {
//         speed: 2.48,
//         deg: 249,
//         gust: 7.08,
//       },
//       visibility: 10000,
//       pop: 0.1,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-25 21:00:00",
//     },
//     {
//       dt: 1679788800,
//       main: {
//         temp: 280.92,
//         feels_like: 280.92,
//         temp_min: 280.92,
//         temp_max: 280.92,
//         pressure: 1005,
//         sea_level: 1005,
//         grnd_level: 1002,
//         humidity: 80,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 79,
//       },
//       wind: {
//         speed: 0.64,
//         deg: 117,
//         gust: 0.56,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-26 00:00:00",
//     },
//     {
//       dt: 1679799600,
//       main: {
//         temp: 280.59,
//         feels_like: 279.05,
//         temp_min: 280.59,
//         temp_max: 280.59,
//         pressure: 1003,
//         sea_level: 1003,
//         grnd_level: 1000,
//         humidity: 83,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 2.36,
//         deg: 66,
//         gust: 5.13,
//       },
//       visibility: 10000,
//       pop: 0.19,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-26 03:00:00",
//     },
//     {
//       dt: 1679810400,
//       main: {
//         temp: 279.8,
//         feels_like: 277.15,
//         temp_min: 279.8,
//         temp_max: 279.8,
//         pressure: 1003,
//         sea_level: 1003,
//         grnd_level: 999,
//         humidity: 89,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 3.8,
//         deg: 54,
//         gust: 9.18,
//       },
//       visibility: 10000,
//       pop: 0.29,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-26 06:00:00",
//     },
//     {
//       dt: 1679821200,
//       main: {
//         temp: 280.48,
//         feels_like: 277.53,
//         temp_min: 280.48,
//         temp_max: 280.48,
//         pressure: 1005,
//         sea_level: 1005,
//         grnd_level: 1002,
//         humidity: 79,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 500,
//           main: "Rain",
//           description: "light rain",
//           icon: "10d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 4.7,
//         deg: 47,
//         gust: 7.65,
//       },
//       visibility: 10000,
//       pop: 0.37,
//       rain: {
//         "3h": 0.12,
//       },
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-26 09:00:00",
//     },
//     {
//       dt: 1679832000,
//       main: {
//         temp: 281.43,
//         feels_like: 278.89,
//         temp_min: 281.43,
//         temp_max: 281.43,
//         pressure: 1008,
//         sea_level: 1008,
//         grnd_level: 1005,
//         humidity: 65,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 4.32,
//         deg: 44,
//         gust: 5.81,
//       },
//       visibility: 10000,
//       pop: 0.29,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-26 12:00:00",
//     },
//     {
//       dt: 1679842800,
//       main: {
//         temp: 281.43,
//         feels_like: 279.09,
//         temp_min: 281.43,
//         temp_max: 281.43,
//         pressure: 1011,
//         sea_level: 1011,
//         grnd_level: 1008,
//         humidity: 55,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 3.89,
//         deg: 27,
//         gust: 5.11,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-26 15:00:00",
//     },
//     {
//       dt: 1679853600,
//       main: {
//         temp: 280.72,
//         feels_like: 279.06,
//         temp_min: 280.72,
//         temp_max: 280.72,
//         pressure: 1014,
//         sea_level: 1014,
//         grnd_level: 1010,
//         humidity: 59,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 2.55,
//         deg: 28,
//         gust: 3.97,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-26 18:00:00",
//     },
//     {
//       dt: 1679864400,
//       main: {
//         temp: 278.78,
//         feels_like: 276.19,
//         temp_min: 278.78,
//         temp_max: 278.78,
//         pressure: 1017,
//         sea_level: 1017,
//         grnd_level: 1013,
//         humidity: 68,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 98,
//       },
//       wind: {
//         speed: 3.33,
//         deg: 47,
//         gust: 5.6,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-26 21:00:00",
//     },
//     {
//       dt: 1679875200,
//       main: {
//         temp: 278.16,
//         feels_like: 276.03,
//         temp_min: 278.16,
//         temp_max: 278.16,
//         pressure: 1019,
//         sea_level: 1019,
//         grnd_level: 1016,
//         humidity: 65,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 99,
//       },
//       wind: {
//         speed: 2.54,
//         deg: 29,
//         gust: 4.44,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-27 00:00:00",
//     },
//     {
//       dt: 1679886000,
//       main: {
//         temp: 276.67,
//         feels_like: 273.73,
//         temp_min: 276.67,
//         temp_max: 276.67,
//         pressure: 1021,
//         sea_level: 1021,
//         grnd_level: 1018,
//         humidity: 81,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 3.19,
//         deg: 13,
//         gust: 5.42,
//       },
//       visibility: 10000,
//       pop: 0.04,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-27 03:00:00",
//     },
//     {
//       dt: 1679896800,
//       main: {
//         temp: 276.19,
//         feels_like: 273.37,
//         temp_min: 276.19,
//         temp_max: 276.19,
//         pressure: 1023,
//         sea_level: 1023,
//         grnd_level: 1020,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 98,
//       },
//       wind: {
//         speed: 2.92,
//         deg: 349,
//         gust: 6.96,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-27 06:00:00",
//     },
//     {
//       dt: 1679907600,
//       main: {
//         temp: 278.08,
//         feels_like: 275.15,
//         temp_min: 278.08,
//         temp_max: 278.08,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 1021,
//         humidity: 53,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03d",
//         },
//       ],
//       clouds: {
//         all: 39,
//       },
//       wind: {
//         speed: 3.62,
//         deg: 2,
//         gust: 5.34,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-27 09:00:00",
//     },
//     {
//       dt: 1679918400,
//       main: {
//         temp: 280.55,
//         feels_like: 278.32,
//         temp_min: 280.55,
//         temp_max: 280.55,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 1021,
//         humidity: 37,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 801,
//           main: "Clouds",
//           description: "few clouds",
//           icon: "02d",
//         },
//       ],
//       clouds: {
//         all: 22,
//       },
//       wind: {
//         speed: 3.34,
//         deg: 354,
//         gust: 3.99,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-27 12:00:00",
//     },
//     {
//       dt: 1679929200,
//       main: {
//         temp: 281.36,
//         feels_like: 278.94,
//         temp_min: 281.36,
//         temp_max: 281.36,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 1021,
//         humidity: 33,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 70,
//       },
//       wind: {
//         speed: 4.03,
//         deg: 352,
//         gust: 4.61,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-27 15:00:00",
//     },
//     {
//       dt: 1679940000,
//       main: {
//         temp: 279.55,
//         feels_like: 277.37,
//         temp_min: 279.55,
//         temp_max: 279.55,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 1022,
//         humidity: 41,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 803,
//           main: "Clouds",
//           description: "broken clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 77,
//       },
//       wind: {
//         speed: 2.95,
//         deg: 2,
//         gust: 4.08,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-27 18:00:00",
//     },
//     {
//       dt: 1679950800,
//       main: {
//         temp: 277.48,
//         feels_like: 275.73,
//         temp_min: 277.48,
//         temp_max: 277.48,
//         pressure: 1026,
//         sea_level: 1026,
//         grnd_level: 1023,
//         humidity: 55,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 801,
//           main: "Clouds",
//           description: "few clouds",
//           icon: "02n",
//         },
//       ],
//       clouds: {
//         all: 13,
//       },
//       wind: {
//         speed: 2.01,
//         deg: 44,
//         gust: 4.11,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-27 21:00:00",
//     },
//     {
//       dt: 1679961600,
//       main: {
//         temp: 276.18,
//         feels_like: 276.18,
//         temp_min: 276.18,
//         temp_max: 276.18,
//         pressure: 1027,
//         sea_level: 1027,
//         grnd_level: 1024,
//         humidity: 69,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 800,
//           main: "Clear",
//           description: "clear sky",
//           icon: "01n",
//         },
//       ],
//       clouds: {
//         all: 8,
//       },
//       wind: {
//         speed: 1.24,
//         deg: 113,
//         gust: 2.26,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-28 00:00:00",
//     },
//     {
//       dt: 1679972400,
//       main: {
//         temp: 275.4,
//         feels_like: 275.4,
//         temp_min: 275.4,
//         temp_max: 275.4,
//         pressure: 1026,
//         sea_level: 1026,
//         grnd_level: 1023,
//         humidity: 69,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 800,
//           main: "Clear",
//           description: "clear sky",
//           icon: "01n",
//         },
//       ],
//       clouds: {
//         all: 4,
//       },
//       wind: {
//         speed: 1.09,
//         deg: 149,
//         gust: 1.07,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "n",
//       },
//       dt_txt: "2023-03-28 03:00:00",
//     },
//     {
//       dt: 1679983200,
//       main: {
//         temp: 274.86,
//         feels_like: 273.56,
//         temp_min: 274.86,
//         temp_max: 274.86,
//         pressure: 1026,
//         sea_level: 1026,
//         grnd_level: 1023,
//         humidity: 68,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 801,
//           main: "Clouds",
//           description: "few clouds",
//           icon: "02d",
//         },
//       ],
//       clouds: {
//         all: 22,
//       },
//       wind: {
//         speed: 1.36,
//         deg: 139,
//         gust: 1.99,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-28 06:00:00",
//     },
//     {
//       dt: 1679994000,
//       main: {
//         temp: 278.55,
//         feels_like: 276.33,
//         temp_min: 278.55,
//         temp_max: 278.55,
//         pressure: 1027,
//         sea_level: 1027,
//         grnd_level: 1024,
//         humidity: 48,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 2.74,
//         deg: 156,
//         gust: 4.32,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-28 09:00:00",
//     },
//     {
//       dt: 1680004800,
//       main: {
//         temp: 281.35,
//         feels_like: 279.05,
//         temp_min: 281.35,
//         temp_max: 281.35,
//         pressure: 1026,
//         sea_level: 1026,
//         grnd_level: 1022,
//         humidity: 43,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 3.79,
//         deg: 188,
//         gust: 5.18,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-28 12:00:00",
//     },
//     {
//       dt: 1680015600,
//       main: {
//         temp: 281.27,
//         feels_like: 278.62,
//         temp_min: 281.27,
//         temp_max: 281.27,
//         pressure: 1024,
//         sea_level: 1024,
//         grnd_level: 1021,
//         humidity: 45,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 4.46,
//         deg: 188,
//         gust: 5.53,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-28 15:00:00",
//     },
//     {
//       dt: 1680026400,
//       main: {
//         temp: 279.71,
//         feels_like: 277.22,
//         temp_min: 279.71,
//         temp_max: 279.71,
//         pressure: 1023,
//         sea_level: 1023,
//         grnd_level: 1020,
//         humidity: 53,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: {
//         all: 100,
//       },
//       wind: {
//         speed: 3.48,
//         deg: 169,
//         gust: 6.94,
//       },
//       visibility: 10000,
//       pop: 0,
//       sys: {
//         pod: "d",
//       },
//       dt_txt: "2023-03-28 18:00:00",
//     },
//   ],
//   city: {
//     id: 2643743,
//     name: "London",
//     coord: {
//       lat: 51.5085,
//       lon: -0.1257,
//     },
//     country: "GB",
//     population: 1000000,
//     timezone: 0,
//     sunrise: 1679551036,
//     sunset: 1679595422,
//   },
// };
