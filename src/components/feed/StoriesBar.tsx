import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Story {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  thumbnail?: string;
  isViewed?: boolean;
}

interface StoriesBarProps {
  stories?: Story[];
  currentUser?: {
    name: string;
    avatar?: string;
  };
}

const StoriesBar = ({ stories = [], currentUser }: StoriesBarProps) => {
  const defaultStories: Story[] = [
    { id: "1", user: { name: "Sarah Wilson" }, isViewed: false },
    { id: "2", user: { name: "Mike Johnson" }, isViewed: true },
    { id: "3", user: { name: "Emily Chen" }, isViewed: false },
    { id: "4", user: { name: "David Kim" }, isViewed: true },
  ];

  const displayStories = stories.length > 0 ? stories : defaultStories;

  return (
    <div className="bg-card rounded-lg shadow-fb p-4 mb-4 overflow-hidden">
      <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
        {/* Create Story Card */}
        <div className="flex-shrink-0 w-28 rounded-xl overflow-hidden bg-secondary relative group cursor-pointer">
          <div className="h-40 bg-gradient-to-b from-secondary to-muted flex flex-col items-center justify-center">
            {currentUser?.avatar ? (
              <img 
                src={currentUser.avatar} 
                alt="Create story" 
                className="w-full h-28 object-cover"
              />
            ) : (
              <div className="w-full h-28 bg-secondary" />
            )}
            <div className="flex-1 flex flex-col items-center justify-center bg-card w-full pt-5 pb-2">
              <div className="absolute top-[100px] w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-card">
                <Plus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold text-center mt-2">Create story</span>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        {displayStories.map((story) => (
          <div 
            key={story.id}
            className="flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <div className={`absolute inset-0 ${story.thumbnail ? '' : 'bg-gradient-to-br from-primary/80 to-accent/80'}`}>
              {story.thumbnail && (
                <img 
                  src={story.thumbnail} 
                  alt={`${story.user.name}'s story`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute top-3 left-3">
              <div className={`p-0.5 rounded-full ${story.isViewed ? 'bg-muted-foreground' : 'bg-primary'}`}>
                <Avatar className="w-9 h-9 border-2 border-card">
                  <AvatarImage src={story.user.avatar} alt={story.user.name} />
                  <AvatarFallback className="bg-secondary text-foreground text-sm">
                    {story.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white line-clamp-2">
              {story.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
