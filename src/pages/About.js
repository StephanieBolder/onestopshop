import Title from "../components/Title";
import logo from '../assets/logo192.png'
export default function About() {
    return (
        <div>
            <Title title="About"/>
            <img src={logo} />
        </div>
    )
}