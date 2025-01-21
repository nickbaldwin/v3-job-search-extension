import './App.css';
import { Results } from './Results';

const App = (): JSX.Element => {
    return (
        <>
            <div className="card">
                <p>
                    Monster Job Search Extension
                </p>
            </div>
            <Results />
        </>
    );
};

export default App;
