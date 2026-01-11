import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Home, 
  Users, 
  PlayCircle, 
  Store, 
  Bell, 
  MessageCircle, 
  Menu,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "Friends", href: "/friends" },
    { icon: PlayCircle, label: "Watch", href: "/watch" },
    { icon: Store, label: "Marketplace", href: "/marketplace" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-fb">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left section - Logo and Search */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">f</span>
            </div>
          </Link>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search SocialHub"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-60 pl-10 bg-secondary border-0 rounded-full focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Center section - Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 max-w-lg mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex-1 flex items-center justify-center h-12 mx-1 rounded-lg interactive-hover group relative"
            >
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right section - Actions and Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary hidden sm:flex">
            <MessageCircle className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0.5 h-auto">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-2">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-3 p-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">See your profile</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings & privacy</DropdownMenuItem>
                <DropdownMenuItem>Help & support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} className="text-destructive">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button size="sm">Log In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
