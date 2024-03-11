import { create } from 'zustand';
interface State {
    results: number;
    bears: number;
    increase: (by: number) => void;
    setResults: (by: number) => void;
}

export const useStore = create<State>()((set) => ({
    bears: 0,
    results: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
    setResults: (by) => set(() => ({ results: by })),
}));
