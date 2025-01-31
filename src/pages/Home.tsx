import React, { useState } from 'react';
import { ArrowRight, Gift, Shield, Zap, ExternalLink, Users, Coins, Calendar } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  const airdrops = [
    {
      name: "Jupiter Protocol",
      description: "Decentralized exchange protocol airdrop for early users and liquidity providers",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&auto=format&fit=crop&q=60",
      value: "$10,000,000",
      deadline: "March 30, 2024",
      requirements: "Early DEX users, Liquidity providers",
      category: ["DeFi", "Infrastructure"],
      status: "upcoming",
      investors: ["Alameda Research", "Paradigm", "Multicoin Capital"],
      website: "https://jupiter.example.com"
    },
    {
      name: "ArbitrumDAO",
      description: "Governance token distribution for Arbitrum network users",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60",
      value: "$120,000,000",
      deadline: "April 15, 2024",
      requirements: "Arbitrum network users with >5 transactions",
      category: ["DAO", "Infrastructure"],
      status: "active",
      investors: ["a16z", "Coinbase Ventures", "Pantera Capital"],
      website: "https://arbitrum.example.com"
    },
    {
      name: "CryptoKitties 2.0",
      description: "Next-generation collectible NFTs with enhanced gameplay features",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format&fit=crop&q=60",
      value: "$15,000,000",
      deadline: "April 5, 2024",
      requirements: "Original CryptoKitties holders, New players",
      category: ["NFT", "Gaming"],
      status: "upcoming",
      investors: ["Andreessen Horowitz", "Union Square Ventures", "Digital Currency Group"],
      website: "https://cryptokitties.example.com"
    },
  ];

  const filteredAirdrops = airdrops.filter(airdrop => {
    const matchesSearch = airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         airdrop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || airdrop.category.includes(category);
    const matchesStatus = status === 'all' || airdrop.status === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Airdrop Info Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your comprehensive guide to the latest cryptocurrency airdrops
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search airdrops..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="DeFi">DeFi</option>
              <option value="NFT">NFT</option>
              <option value="DAO">DAO</option>
              <option value="Gaming">Gaming</option>
              <option value="Infrastructure">Infrastructure</option>
            </select>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="ended">Ended</option>
            </select>
          </div>
        </div>
      </section>

      {/* Airdrops List Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredAirdrops.map((airdrop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <img
                        src={airdrop.image}
                        alt={airdrop.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{airdrop.name}</h3>
                          <p className="text-gray-600 mt-2">{airdrop.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          airdrop.status === 'active' ? 'bg-green-100 text-green-800' :
                          airdrop.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {airdrop.status.charAt(0).toUpperCase() + airdrop.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Coins className="h-5 w-5 text-indigo-600" />
                          <span className="text-gray-700">Value: {airdrop.value}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-indigo-600" />
                          <span className="text-gray-700">Deadline: {airdrop.deadline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-indigo-600" />
                          <span className="text-gray-700">Requirements: {airdrop.requirements}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-5 w-5 text-indigo-600" />
                          <a href={airdrop.website} className="text-indigo-600 hover:text-indigo-700">
                            Project Website
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {airdrop.category.map((cat, i) => (
                          <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-gray-600">
                        <strong>Investors:</strong> {airdrop.investors.join(', ')}
                      </div>

                      <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;