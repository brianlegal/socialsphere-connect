import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import StoriesBar from "@/components/feed/StoriesBar";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockPosts = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "Sarah Wilson",
      avatar: undefined,
    },
    content: "Just finished an amazing hiking trip! The views were absolutely breathtaking. Nature really is the best therapy. 🏔️✨",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 42,
    comments: [
      {
        id: "c1",
        author: { id: "user2", name: "Mike Johnson" },
        content: "Wow, that sounds incredible! Which trail did you hike?",
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        likes: 3,
      },
    ],
    shares: 5,
    isLiked: false,
  },
  {
    id: "2",
    author: {
      id: "user3",
      name: "Emily Chen",
      avatar: undefined,
    },
    content: "Excited to announce that I've just accepted a new position at Tech Corp! 🎉 After months of hard work and interviews, this dream has finally come true. Grateful for everyone who supported me along the way.",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 156,
    comments: [
      {
        id: "c2",
        author: { id: "user4", name: "David Kim" },
        content: "Congratulations Emily! So well deserved! 🎊",
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
        likes: 8,
      },
      {
        id: "c3",
        author: { id: "user5", name: "Lisa Anderson" },
        content: "Amazing news! You're going to do great things there!",
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        likes: 5,
      },
    ],
    shares: 12,
    isLiked: true,
  },
  {
    id: "3",
    author: {
      id: "user6",
      name: "Alex Thompson",
      avatar: undefined,
    },
    content: "Made my first homemade pasta today! It took 3 hours and the kitchen is a mess, but totally worth it. 🍝👨‍🍳",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    likes: 89,
    comments: [],
    shares: 3,
    isLiked: false,
  },
];

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [posts, setPosts] = useState(mockPosts);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  const handleCreatePost = (content: string) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        id: user?.id || "current",
        name: user?.user_metadata?.name || "You",
        avatar: user?.user_metadata?.avatar_url,
      },
      content,
      createdAt: new Date(),
      likes: 0,
      comments: [],
      shares: 0,
      isLiked: false,
    };
    setPosts([newPost, ...posts]);
    toast({
      title: "Post created!",
      description: "Your post has been shared with your friends.",
    });
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: string, content: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: Date.now().toString(),
          author: {
            id: user?.id || "current",
            name: user?.user_metadata?.name || "You",
          },
          content,
          createdAt: new Date(),
          likes: 0,
        };
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    }));
  };

  const currentUser = user ? {
    id: user.id,
    name: user.user_metadata?.name || "User",
    avatar: user.user_metadata?.avatar_url,
  } : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-soft">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">f</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        user={currentUser}
        onLogout={handleLogout}
      />
      
      <div className="pt-14 flex">
        <LeftSidebar user={currentUser} />
        
        <main className="flex-1 lg:ml-[280px] xl:mr-[280px] min-h-[calc(100vh-56px)]">
          <div className="max-w-[680px] mx-auto px-4 py-4">
            <StoriesBar currentUser={currentUser} />
            
            <CreatePost 
              user={currentUser}
              onSubmit={handleCreatePost}
            />
            
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUser={currentUser}
                onLike={handleLike}
                onComment={handleComment}
              />
            ))}
          </div>
        </main>
        
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
