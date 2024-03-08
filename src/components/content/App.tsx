import './App.css';
import { Results } from './Results';
import { Listener } from './resultsListener';

const App = (): JSX.Element => {
    return (
        <>
            <Listener />
            <h1>V3 Ext</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <Results />
        </>
    );
};

export default App;
