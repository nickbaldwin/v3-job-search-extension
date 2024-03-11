import { create } from 'zustand';
import zukeeper from 'zukeeper';
interface State {
    results: number;
    bears: number;
    increase: (by: number) => void;
    setResults: (by: number) => void;
}

export const useStore = create<State>()(
    // @ts-expect-error any
    zukeeper((set) => ({
        bears: 0,
        results: 0,
        increase: (by: number) =>
            set((state: { bears: number }) => ({ bears: state.bears + by })),
        setResults: (to: number) => set(() => ({ results: to })),
    }))
);

// @ts-expect-error global property
window.store = useStore;
