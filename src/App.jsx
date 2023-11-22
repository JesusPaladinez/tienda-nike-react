// importar paginas
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Camisetas from './pages/menuProductos/Camisetas.jsx';
import Jeans from './pages/menuProductos/Jeans.jsx';
import Zapatos from './pages/menuProductos/Zapatos.jsx';
import Hombres from './pages/menuCategorias/Hombres.jsx';
import Mujeres from './pages/menuCategorias/Mujeres.jsx';
import Ninios from './pages/menuCategorias/Ninios.jsx';
// importar estilos
import './App.css'// importar componentes
import NavComponent from './components/NavComponents.jsx';
// importar dependencias
import { BrowserRouter, useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const router = useRoutes([
    {path:"/home", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/camisetas", element:<Camisetas/>},
    {path:"/jeans", element:<Jeans/>},
    {path:"/zapatos", element:<Zapatos/>},
    {path:"/hombres", element:<Hombres/>},
    {path:"/mujeres", element:<Mujeres/>},
    {path:"/niños", element:<Ninios/>},
  ])

  return router;

}

function App() {

  return (
    <>
      <BrowserRouter>
        <NavComponent/>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
