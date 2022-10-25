import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = set => ({
    city: '',
    lon: '101.703651',
    lat: '3.152815',
    setLon: lon => set(() => ({ lon: lon })),
    setCity: city => set(() => ({ city: city })),
    setLat: lat => set(() => ({ lat: lat })),
});

const useWeatherLocationAutoCompleteStore = create(devtools(store));

export default useWeatherLocationAutoCompleteStore;
