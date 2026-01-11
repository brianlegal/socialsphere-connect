import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import StoriesBar from "@/components/feed/StoriesBar";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import BouncingName from "@/components/BouncingName";

const Index = () => {
  // Mock data for the feed
  const currentUser = {
    id: "me",
    name: "Kaua",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
  };

  const posts = [
    {
      id: "1",
      author: {
        id: "2",
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      },
      content: "Just finished a great hike! The views were absolutely breathtaking. 🏔️✨",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      likes: 124,
      comments: [
        {
          id: "c1",
          author: { id: "3", name: "Mike Johnson" },
          content: "Wow, looks amazing! Where is this?",
          createdAt: new Date(Date.now() - 1000 * 60 * 15),
          likes: 5,
        }
      ],
      shares: 12,
    },
    {
      id: "2",
      author: {
        id: "4",
        name: "Tech News",
        avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=80&h=80&fit=crop",
      },
      content: "Exciting news in the tech world today! New breakthroughs in AI are changing how we think about the future. What are your thoughts? 🤖🚀",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      likes: 856,
      comments: [],
      shares: 142,
    }
  ];

  return (
    &lt;div className="min-h-screen bg-secondary/50"&gt;
      &lt;Header user={currentUser} /&gt;
      &lt;BouncingName /&gt;
      
      &lt;div className="pt-14 flex justify-center"&gt;
        &lt;LeftSidebar user={currentUser} /&gt;
        
        &lt;main className="w-full max-w-[680px] px-4 py-6 lg:ml-[280px] xl:mr-[280px]"&gt;
          &lt;StoriesBar currentUser={currentUser} /&gt;
          &lt;CreatePost user={currentUser} /&gt;
          
          &lt;div className="space-y-4"&gt;
            {posts.map((post) =&gt; (
              &lt;PostCard 
                key={post.id} 
                post={post} 
                currentUser={currentUser}
              /&gt;
            ))}
          &lt;/div&gt;
        &lt;/main&gt;

        &lt;RightSidebar /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default Index;