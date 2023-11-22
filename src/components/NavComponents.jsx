import { Link } from "react-router-dom"

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-relative">
      <div className="container-fluid w-100 d-flex justify-content-around grid gap-3">
        <Link to='/home' className="navbar-brand fw-semibold fst-italic" href="#">Nike</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex position-absolute top-50 start-50 translate-middle" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-warning" type="submit">Buscar</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 grid gap-3">
            <li className="nav-item">
              <Link to='/home' className="nav-Link desactivarLink" href="#">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to='/productos' className="nav-Link dropdown-toggle desactivarLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
              <ul className="dropdown-menu">
                <li><Link to='/camisetas' className="dropdown-item" href="#">Camisetas</Link></li>
                <li><Link to='/jeans' className="dropdown-item" href="#">Jeans</Link></li>
                <li><Link to='/zapatos' className="dropdown-item" href="#">Zapatos</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to='/categorias' className="nav-Link dropdown-toggle desactivarLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</Link>
              <ul className="dropdown-menu">
                <li><Link to='/mujeres' className="dropdown-item" href="#">Mujeres</Link></li>
                <li><Link to='/hombres' className="dropdown-item" href="#">Hombres</Link></li>
                <li><Link to='/niños' className="dropdown-item" href="#">Niños</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-Link desactivarLink" href="#">Salir</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavComponent