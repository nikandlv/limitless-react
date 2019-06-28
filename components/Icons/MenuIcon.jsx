export default function MenuIcon(props) {
    const {active,onClick} = props
    if(active === false) {
        return (
            <svg onClick={onClick}  id="menu" className="rotate-menu close" xmlns="http://www.w3.org/2000/svg" width="22" height="14.956" viewBox="0 0 22 14.956">
                <rect id="Rectangle_101" data-name="Rectangle 101" width="17.6" height="2.137" rx="1.068" transform="translate(4.4)" fill="#212026"/>
                <rect id="Rectangle_102" data-name="Rectangle 102" width="22" height="2.137" rx="1.068" transform="translate(0 6.41)" fill="#212026"/>
                <rect id="Rectangle_103" data-name="Rectangle 103" width="17.6" height="2.137" rx="1.068" transform="translate(0 12.819)" fill="#212026"/>
            </svg>
            )
        }
        else {
            return (
                <svg onClick={onClick} className="rotate-menu active" id="menu" xmlns="http://www.w3.org/2000/svg" width="22" height="14.956" viewBox="0 0 22 14.956">
                    <rect id="Rectangle_101" data-name="Rectangle 101" width="17.6" height="2.137" rx="1.068" transform="translate(4.4)" fill="#ffffff"/>
                    <rect id="Rectangle_102" data-name="Rectangle 102" width="22" height="2.137" rx="1.068" transform="translate(0 6.41)" fill="#ffffff"/>
                    <rect id="Rectangle_103" data-name="Rectangle 103" width="17.6" height="2.137" rx="1.068" transform="translate(0 12.819)" fill="#ffffff"/>
                </svg>
            )   
        }
}
