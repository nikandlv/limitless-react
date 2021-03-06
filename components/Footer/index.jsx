import MenuIcon from "../Icons/MenuIcon";
import {useState} from 'react'
import BodyDecorationLight from "../Wrapper/BodyDecorationLight";
export default function Footer() {
    const [menuOpen,setMenuOpen] = useState(false)
    const [active,setActive] = useState(0)
    return (
            <footer>
                <MenuIcon active={menuOpen} onClick={()=> {
                    setMenuOpen(!menuOpen)
                }}/>
                <div className="button-gutter"/>
                <button className={`medium ${active === 0?"active":""}`} onClick={()=>setActive(0)}>
                    Features
                </button>
                <button className={`medium ${active === 1?"active":""}`}  onClick={()=>setActive(1)}>
                    Reviews
                </button>
                <button className={`medium ${active === 2?"active":""}`}  onClick={()=>setActive(2)}>
                    Download now
                </button>
                <div className="flex-grow-1" />
                <div>
                    <span className="credit-main">Designed by <a target="_blank" href="https://dribbble.com/shots/5310448-Dailyui-003-Landingpage">Victor Niculici</a></span>
                    <span className="credit-sub">Coded by <a target="_blank" href="https://nikandlv.ir">Nikandlv</a></span>
                </div>
                <div className={`menu ${(menuOpen?"open":"close")}`}>
                    <span className="level-1"/>
                    <span className="level-2"/>
                    <span className="level-3"/>

                </div>
            </footer>
    )
}