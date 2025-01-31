import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Crypto Airdrops: A Beginner's Guide",
      excerpt: "Learn everything you need to know about cryptocurrency airdrops, how they work, and how to participate safely.",
      author: "John Crypto",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&auto=format&fit=crop&q=60",
      category: "Education"
    },
    {
      title: "Top 5 Upcoming Airdrops in April 2024",
      excerpt: "Discover the most promising cryptocurrency airdrops happening next month and how to qualify for them.",
      author: "Sarah Blockchain",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60",
      category: "News"
    },
    {
      title: "How to Stay Safe While Farming Airdrops",
      excerpt: "Essential security tips and best practices to protect yourself while participating in cryptocurrency airdrops.",
      author: "Mike Security",
      date: "March 18, 2024",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format&fit=crop&q=60",
      category: "Security"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
        <p className="text-xl text-gray-600">
          Stay informed about the latest airdrops, trends, and crypto news
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-indigo-600 font-semibold">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center mt-4 text-indigo-600 hover:text-indigo-700">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default Blog;