import { FiMoreHorizontal } from "react-icons/fi";
import ocean from "../assets/ocean.jpg";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

export const Post = () => {
	return (
		<main className="post-container">
			<div className="post-section">
				<div className="post-header">
					<div className="account-name">
						<div className="profile-pic" />
						<p>ocean_lover</p>
					</div>
					<FiMoreHorizontal style={{ cursor: "pointer" }} />
				</div>
				<div className="post-content">
					<img src={ocean} alt="ocean" className="post-image" />
				</div>
				<div className="post-response">
					<BsHeart size="1.7em" style={{ marginRight: 10 }} />
					<AiOutlineMessage size="2em" />
				</div>
				<div className="post-reaction">
					<p className="likes">887 likes</p>
				</div>
				<div className="post-caption">
					<span className="username">ocean_lover</span>
					<span className="caption">Deep dive into the ocean</span>
				</div>
				<div className="post-comment">
					<div className="user-comments">
						<span className="username">dive_1910</span>
						<span className="comment">Cool photo</span>
					</div>
					<AiOutlineHeart size="0.8em" />
				</div>
				<div className="post-comment">
					<div className="user-comments">
						<span className="username">ocean-photo</span>
						<span className="comment">Wish I would be like this</span>
					</div>
					<AiOutlineHeart size="0.8em" />
				</div>
				<p className="time-stamp">2 hours ago</p>
				<div className="add-comment">
					<input
						type="text"
						id="comment-input"
						placeholder="Add a comment..."
					/>
					<button type="submit" className="post-btn">
						Post
					</button>
				</div>
			</div>
		</main>
	);
};
