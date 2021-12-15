import Title from "../components/Title";
import logo from '../assets/logo192.png'
export default function About() {
    return (
        <div>
            <Title title="About - Develop"/>
            <img src={logo} alt="Logo"/>
        </div>
    )
}