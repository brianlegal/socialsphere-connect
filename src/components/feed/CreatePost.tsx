import { useState } from "react";
import { Image, Video, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface CreatePostProps {
  user?: {
    name: string;
    avatar?: string;
  };
  onSubmit?: (content: string) => void;
}

const CreatePost = ({ user, onSubmit }: CreatePostProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim() && onSubmit) {
      onSubmit(content);
      setContent("");
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-fb p-4 mb-4">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback className="bg-secondary text-foreground">
            {user?.name?.charAt(0) || "?"}
          </AvatarFallback>
        </Avatar>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="flex-1 bg-secondary hover:bg-fb-hover rounded-full px-4 py-2.5 text-left text-muted-foreground transition-colors">
              What's on your mind, {user?.name?.split(' ')[0] || "there"}?
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">Create post</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-secondary text-foreground">
                    {user?.name?.charAt(0) || "?"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{user?.name || "User"}</p>
                  <Button variant="secondary" size="sm" className="h-6 text-xs">
                    🌍 Public
                  </Button>
                </div>
              </div>
              
              <Textarea
                placeholder={`What's on your mind, ${user?.name?.split(' ')[0] || "there"}?`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[150px] border-0 focus-visible:ring-0 text-lg resize-none p-0"
              />

              <div className="flex items-center justify-between mt-4 p-3 border rounded-lg">
                <span className="font-medium text-sm">Add to your post</span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="text-fb-green hover:bg-fb-hover">
                    <Image className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:bg-fb-hover">
                    <Video className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-yellow-500 hover:bg-fb-hover">
                    <Smile className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="w-full mt-4"
              >
                Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="h-px bg-border my-3" />

      <div className="flex items-center justify-between">
        <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-fb-hover">
          <Video className="w-5 h-5 text-destructive" />
          <span className="hidden sm:inline">Live video</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-fb-hover">
          <Image className="w-5 h-5 text-fb-green" />
          <span className="hidden sm:inline">Photo/video</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-fb-hover">
          <Smile className="w-5 h-5 text-yellow-500" />
          <span className="hidden sm:inline">Feeling/activity</span>
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
