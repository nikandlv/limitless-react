import MenuIcon from "../Icons/MenuIcon";

export default function Footer() {
    return (
            <footer>
                <MenuIcon />
                <div className="button-gutter"/>
                <button className="medium active">
                    Features
                </button>
                <button className="medium">
                    Reviews
                </button>
                <button className="medium">
                    Download now
                </button>
                <div className="flex-grow-1" />
                <div>
                    <span className="credit-main">Designed by <a href="https://dribbble.com/shots/5310448-Dailyui-003-Landingpage">Victor Niculici</a></span>
                    <span className="credit-sub">Coded by <a href="https://nikandlv.ir">Nikandlv</a></span>
                </div>
            </footer>
    )
}