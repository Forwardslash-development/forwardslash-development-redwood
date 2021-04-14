import { Link, routes } from '@redwoodjs/router'

const SiteLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Forwardslash Development</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Forwardslash Development</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SiteLayout
