
import create from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
    filter: 'closed',
    setFilter: (filter) => set(() => ({ filter: filter })),
});

const useGithubIssuesFilterStore = create(devtools(store))

export default useGithubIssuesFilterStore;