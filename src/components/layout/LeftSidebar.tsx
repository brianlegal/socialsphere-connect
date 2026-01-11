import { Link } from "react-router-dom";
import { 
  Users, 
  Clock, 
  Bookmark, 
  Calendar, 
  Flag, 
  ChevronDown,
  UserCircle,
  Video,
  Store
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface LeftSidebarProps {
  user?: {
    name: string;
    avatar?: string;
  };
}

const LeftSidebar = ({ user }: LeftSidebarProps) => {
  const menuItems = [
    { icon: Users, label: "Friends", href: "/friends" },
    { icon: Clock, label: "Memories", href: "/memories" },
    { icon: Bookmark, label: "Saved", href: "/saved" },
    { icon: Flag, label: "Pages", href: "/pages" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: Video, label: "Videos", href: "/watch" },
    { icon: Store, label: "Marketplace", href: "/marketplace" },
  ];

  return (
    <aside className="fixed left-0 top-14 w-[280px] h-[calc(100vh-56px)] overflow-y-auto p-2 hidden lg:block">
      <nav className="space-y-1">
        {user && (
          <Link
            to="/profile"
            className="flex items-center gap-3 p-2 rounded-lg interactive-hover"
          >
            <Avatar className="w-9 h-9">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{user.name}</span>
          </Link>
        )}

        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-3 p-2 rounded-lg interactive-hover"
          >
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 p-2 h-auto font-medium"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
            <ChevronDown className="w-5 h-5" />
          </div>
          See more
        </Button>
      </nav>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="px-2 text-xs text-muted-foreground">
          Privacy · Terms · Advertising · Cookies · © 2024 SocialHub
        </p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
