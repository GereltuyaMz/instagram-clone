import { Post, ProfileCard } from "../../components";
import "./style.css";

const Feed = () => {
	return (
		<main className="feed-container">
			<div className="post-card">
				<Post />
			</div>
			<ProfileCard />
		</main>
	);
};

export default Feed;
