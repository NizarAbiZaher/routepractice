import { Link, NavLink } from "react-router-dom"


export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Nizar</Link>
            <ul>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}