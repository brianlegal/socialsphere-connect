import { Search, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
}

interface RightSidebarProps {
  contacts?: Contact[];
}

const RightSidebar = ({ contacts = [] }: RightSidebarProps) => {
  const defaultContacts: Contact[] = [
    { id: "1", name: "Sarah Wilson", isOnline: true },
    { id: "2", name: "Mike Johnson", isOnline: true },
    { id: "3", name: "Emily Chen", isOnline: false },
    { id: "4", name: "David Kim", isOnline: true },
    { id: "5", name: "Lisa Anderson", isOnline: false },
  ];

  const displayContacts = contacts.length > 0 ? contacts : defaultContacts;

  return (
    <aside className="fixed right-0 top-14 w-[280px] h-[calc(100vh-56px)] overflow-y-auto p-4 hidden xl:block">
      {/* Sponsored section */}
      <div className="mb-4">
        <h3 className="text-muted-foreground font-semibold text-sm mb-3">Sponsored</h3>
        <div className="space-y-3">
          <div className="flex gap-3 cursor-pointer interactive-hover rounded-lg p-2 -mx-2">
            <div className="w-32 h-32 bg-secondary rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">Amazing Product</p>
              <p className="text-xs text-muted-foreground">sponsored.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-border my-4" />

      {/* Contacts section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-muted-foreground font-semibold text-sm">Contacts</h3>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          {displayContacts.map((contact) => (
            <button
              key={contact.id}
              className="w-full flex items-center gap-3 p-2 rounded-lg interactive-hover text-left"
            >
              <div className="relative">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback className="bg-secondary text-foreground text-sm">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {contact.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-fb-green border-2 border-card rounded-full" />
                )}
              </div>
              <span className="font-medium text-sm">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
