import AppRoutes from './common/AppRoutes';
import GlobalProvider from './common/context/GlobalProvider';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </div>
  );
}

export default App;
