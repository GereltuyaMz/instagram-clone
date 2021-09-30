import "./style.css";
import {
	AiOutlineHome,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineProfile,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav className="page-header">
			<h2>Instagram</h2>
			<BiSearch style={{ position: "absolute", left: "40%" }} size="0.9em" color="#8e8e8e" />
			<input type="text" id="search" placeholder="Search" />
			<div className="header-icons">
				<Link to="/" className="link">
					<AiOutlineHome size="1.7em" style={{ cursor: "pointer" }} />
				</Link>
				<RiMessengerLine size="1.7em" style={{ cursor: "pointer" }} />
				<Link to="/discover" className="link">
					<AiOutlineCompass size="1.7em" style={{ cursor: "pointer" }} />
				</Link>
				<AiOutlineHeart size="1.7em" style={{ cursor: "pointer" }} />
				<Link to="/profile" className="link">
					<AiOutlineProfile size="1.7em" style={{ cursor: "pointer" }} />
				</Link>
			</div>
		</nav>
	);
};
