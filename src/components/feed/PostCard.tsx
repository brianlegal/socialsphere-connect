import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Globe,
  Send
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PostAuthor {
  id: string;
  name: string;
  avatar?: string;
}

interface Comment {
  id: string;
  author: PostAuthor;
  content: string;
  createdAt: Date;
  likes: number;
}

interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
  shares: number;
  isLiked?: boolean;
}

interface PostCardProps {
  post: Post;
  currentUser?: PostAuthor;
  onLike?: (postId: string) => void;
  onComment?: (postId: string, content: string) => void;
  onShare?: (postId: string) => void;
  onDelete?: (postId: string) => void;
}

const PostCard = ({ 
  post, 
  currentUser, 
  onLike, 
  onComment, 
  onShare,
  onDelete 
}: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    onLike?.(post.id);
  };

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      onComment?.(post.id, commentText);
      setCommentText("");
    }
  };

  const isOwnPost = currentUser?.id === post.author.id;

  return (
    <article className="bg-card rounded-lg shadow-fb mb-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-0">
        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="bg-secondary text-foreground">
              {post.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold hover:underline cursor-pointer">
              {post.author.name}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{formatDistanceToNow(post.createdAt, { addSuffix: true })}</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save post</DropdownMenuItem>
            <DropdownMenuItem>Hide post</DropdownMenuItem>
            {isOwnPost && (
              <DropdownMenuItem 
                className="text-destructive"
                onClick={() => onDelete?.(post.id)}
              >
                Delete post
              </DropdownMenuItem>
            )}
            {!isOwnPost && (
              <DropdownMenuItem className="text-destructive">Report post</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="bg-secondary">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      )}

      {/* Stats */}
      {(likesCount > 0 || post.comments.length > 0 || post.shares > 0) && (
        <div className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            {likesCount > 0 && (
              <>
                <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-3 h-3 text-primary-foreground" />
                </span>
                <span>{likesCount}</span>
              </>
            )}
          </div>
          <div className="flex gap-4">
            {post.comments.length > 0 && (
              <button 
                onClick={() => setShowComments(!showComments)}
                className="hover:underline"
              >
                {post.comments.length} comments
              </button>
            )}
            {post.shares > 0 && (
              <span>{post.shares} shares</span>
            )}
          </div>
        </div>
      )}

      <div className="h-px bg-border mx-4" />

      {/* Actions */}
      <div className="flex items-center justify-between px-2 py-1">
        <Button 
          variant="ghost" 
          className={cn(
            "flex-1 gap-2",
            isLiked && "text-primary"
          )}
          onClick={handleLike}
        >
          <ThumbsUp className={cn("w-5 h-5", isLiked && "fill-primary")} />
          Like
        </Button>
        <Button 
          variant="ghost" 
          className="flex-1 gap-2"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="w-5 h-5" />
          Comment
        </Button>
        <Button 
          variant="ghost" 
          className="flex-1 gap-2"
          onClick={() => onShare?.(post.id)}
        >
          <Share2 className="w-5 h-5" />
          Share
        </Button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4">
          <div className="h-px bg-border mb-3" />
          
          {/* Comment Input */}
          <div className="flex gap-2 mb-3">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src={currentUser?.avatar} alt={currentUser?.name} />
              <AvatarFallback className="bg-secondary text-foreground text-sm">
                {currentUser?.name?.charAt(0) || "?"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmitComment()}
                className="bg-secondary border-0 rounded-full"
              />
              <Button 
                size="icon" 
                variant="ghost"
                onClick={handleSubmitComment}
                disabled={!commentText.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-3">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                  <AvatarFallback className="bg-secondary text-foreground text-sm">
                    {comment.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-secondary rounded-2xl px-3 py-2">
                    <p className="font-semibold text-sm">{comment.author.name}</p>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                  <div className="flex gap-4 px-3 mt-1 text-xs text-muted-foreground">
                    <button className="font-semibold hover:underline">Like</button>
                    <button className="font-semibold hover:underline">Reply</button>
                    <span>{formatDistanceToNow(comment.createdAt, { addSuffix: true })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default PostCard;
