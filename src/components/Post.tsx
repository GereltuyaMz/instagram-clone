import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { IPost } from "../interfaces";

type PostHeader = {
	username: string;
};

type PostFooter = {
	username: string;
	caption?: string;
	likesQuantity?: number;
};

type PostComment = {
	commentUsername?: string;
	comment?: string;
	timeStamp?: string;
};

export const Post = ({
	username,
	caption,
	imgUrl,
	likesQuantity,
	commentUsername,
	comment,
	timeStamp,
}: IPost) => {
	const PostHeader = ({ username }: PostHeader) => {
		return (
			<header className="post-header">
				<div className="account-name">
					<div className="profile-pic" />
					<p>{username}</p>
				</div>
				<FiMoreHorizontal style={{ cursor: "pointer" }} />
			</header>
		);
	};

	const PostFooter = ({ username, caption, likesQuantity }: PostFooter) => {
		return (
			<>
				<div className="post-footer spacing10">
					<AiOutlineHeart />
					<AiOutlineMessage />
					<p>{`${likesQuantity}`} likes</p>
				</div>
				<div className="spacing10">
					<span className="username">{username}</span>
					<span className="caption">{caption}</span>
				</div>
			</>
		);
	};

	const PostComment = ({
		commentUsername,
		comment,
		timeStamp,
	}: PostComment) => {
		return (
			<>
				<div className="post-comment">
					<div className="user-comments">
						<span className="username">{commentUsername}</span>
						<span className="comment">{comment}</span>
					</div>
					<AiOutlineHeart size="0.8em" />
				</div>
				<p className="time-stamp">{timeStamp}</p>
				<div className="add-comment">
					<input id="comment-input" placeholder="Add a comment..." />
					<input type="button" value="Post" className="post-btn" />
				</div>
			</>
		);
	};

	return (
		<article className="post-card">
			<PostHeader username={username} />
			<img src={imgUrl} />
			<PostFooter
				username={username}
				caption={caption}
				likesQuantity={likesQuantity}
			/>
			<PostComment
				commentUsername={commentUsername}
				comment={comment}
				timeStamp={timeStamp}
			/>
		</article>
	);
};
