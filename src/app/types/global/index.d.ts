interface IWeather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

interface ISocialInfo {
    title: string;
    img: string;
    followers: number;
    following: number;
}

interface IRelaxDestination {
    title: string;
    img: string;
    address: string;
    phone: number;
    weather: IWeather;
    social_info: ISocialInfo;
    type: string;
}
