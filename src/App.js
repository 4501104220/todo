import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Menu } from './components/menu';
import { routes } from './config/routes';
import { MyRoute } from './components/myRoute';
import { MyContextProvider } from './context/myContext';
import { TodoProvider } from './context/todoContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <h1>TODO APP</h1>
        <TodoProvider>
          <BrowserRouter>
            {/* <!-- Menu --> */}
            <Menu />
            {/* Route */}
            <Switch>
              {routes.map((item, index) => {
                return (
                  <MyRoute key={index} path={item.path} component={item.component} />
                )
              })}
            </Switch>
          </BrowserRouter>
        </TodoProvider>
      </MyContextProvider>
    </div>
  );
}

export default App;