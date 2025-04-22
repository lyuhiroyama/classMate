import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <div className="navbar-component">
            <div className="navbar">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/login" className="nav-link">ログイン</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}