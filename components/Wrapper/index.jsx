import 'normalize.sass/_normalize.sass'
import '../../resources/App.sass'

export default function Wrapper(props) {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}