import SearchIcon from '../Icons/SearchIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import BehanceIcon from '../Icons/BehanceIcon';
import Input from '../Form/Input';
import Logo from '../Icons/Logo';
export default function Header() {
    return(
        <header>
            <Logo />
            <div />
            <div className="search-icon-spacing" />
                <SearchIcon />
                <Input placeholder="Search..." className="search-input"/>
            <div className="end-icons-spacing" />
            <div className="end-icons">
                <FacebookIcon />
                <LinkedInIcon />
                <BehanceIcon />
            </div>
        </header>
    )
}