
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Gift, 
  Users, 
  User, 
  DollarSign, 
  Video, 
  Mic, 
  Star, 
  Award, 
  BadgeCheck
} from 'lucide-react';

type MockupFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: MockupFeature[] = [
  {
    icon: <Video className="text-white" size={24} />,
    title: "Live Broadcasting",
    description: "Stream to thousands with crystal clear video",
    color: "from-purple-600 to-indigo-600"
  },
  {
    icon: <Gift className="text-white" size={24} />,
    title: "Virtual Gifts",
    description: "Earn through gifts from your audience",
    color: "from-pink-600 to-rose-600"
  },
  {
    icon: <Users className="text-white" size={24} />,
    title: "Multiple Rooms",
    description: "Create and join different streaming rooms",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <DollarSign className="text-white" size={24} />,
    title: "Monetization",
    description: "Convert your popularity into earnings",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: <Mic className="text-white" size={24} />,
    title: "Voice Chat",
    description: "High-quality audio conversations",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: <BadgeCheck className="text-white" size={24} />,
    title: "Verified Status",
    description: "Stand out with official broadcaster status",
    color: "from-indigo-500 to-purple-500"
  },
]

const PhoneMockup = ({ feature }: { feature: MockupFeature }) => {
  return (
    <div className="relative w-[220px] h-[440px] rounded-[36px] border-8 border-gray-800 overflow-hidden shadow-xl mx-auto transform transition-all duration-300 hover:scale-105">
      {/* Phone Notch */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 z-10">
        <div className="w-16 h-4 bg-gray-800 rounded-b-lg mx-auto"></div>
      </div>
      
      {/* Phone Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-3 rounded-sm bg-white/80"></div>
            <div className="w-3 h-3 rounded-full bg-white/80"></div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-4 flex flex-col h-full">
          {/* Feature Icon */}
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 shadow-lg`}>
            {feature.icon}
          </div>
          
          {/* Feature Name */}
          <h3 className="text-white text-lg font-bold mb-1">{feature.title}</h3>
          <p className="text-white/70 text-sm mb-6">{feature.description}</p>
          
          {/* Simulated Content */}
          <div className="flex-1 relative">
            {/* Content depends on feature type */}
            {feature.title === "Live Broadcasting" && (
              <div className="absolute inset-0">
                <div className="rounded-lg bg-gradient-to-b from-purple-900/60 to-black h-48 mb-3 overflow-hidden relative">
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">LIVE</div>
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="text-white text-xs">@username</span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center">
                    <div className="text-white text-xs bg-black/50 px-2 py-0.5 rounded-full">2.4K</div>
                  </div>
                </div>
                <div className="flex space-x-2 mb-3">
                  <div className="w-1/2 h-24 bg-gradient-to-b from-indigo-900/60 to-black rounded-lg"></div>
                  <div className="w-1/2 h-24 bg-gradient-to-b from-purple-900/60 to-black rounded-lg"></div>
                </div>
              </div>
            )}
            
            {feature.title === "Virtual Gifts" && (
              <div className="absolute inset-0">
                <div className="rounded-lg bg-gradient-to-b from-pink-900/60 to-black h-48 mb-3 flex flex-col items-center justify-center">
                  <Gift size={40} className="text-royal-gold animate-pulse-glow" />
                  <div className="mt-2 py-1 px-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full">
                    <span className="text-white text-xs font-bold">SUPER GIFT!</span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center space-x-1">
                    <DollarSign size={14} className="text-royal-gold" />
                    <span className="text-white text-xs">+500</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-b from-pink-900/30 to-black/80 rounded-lg flex items-center justify-center">
                      <Gift size={20} className="text-white/70" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {feature.title === "Multiple Rooms" && (
              <div className="absolute inset-0">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-b from-blue-900/60 to-black rounded-lg flex flex-col items-center justify-center">
                      <Users size={20} className="text-white/80 mb-1" />
                      <span className="text-white text-xs">Room {i}</span>
                      <span className="text-white/60 text-[10px]">{(i * 13) + 24} people</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 bg-blue-700/20 border border-blue-600/30 rounded-md p-2">
                  <h4 className="text-white text-xs font-medium">Trending Rooms</h4>
                  <div className="mt-1 space-y-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-white/80 text-xs">Gaming Room {i}</span>
                        <span className="text-white/60 text-xs">{(i * 45) + 120} <Users size={10} className="inline" /></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {feature.title === "Monetization" && (
              <div className="absolute inset-0">
                <div className="rounded-lg bg-gradient-to-b from-green-900/60 to-black h-32 mb-3 p-4 flex flex-col justify-center">
                  <h3 className="text-white text-sm font-medium mb-1">Your Earnings</h3>
                  <div className="text-white text-xl font-bold flex items-center">
                    <DollarSign className="text-royal-gold" size={20} />
                    <span>1,245.80</span>
                  </div>
                  <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span className="text-white/60 text-xs">This month</span>
                    <span className="text-white/80 text-xs">+24.5%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-900/20 border border-green-600/30 rounded-md p-2 flex justify-between items-center">
                    <div>
                      <span className="text-white text-xs">Gift Revenue</span>
                      <div className="text-white/70 text-xs">This week</div>
                    </div>
                    <div className="text-white font-medium">$345.50</div>
                  </div>
                  <div className="bg-green-900/20 border border-green-600/30 rounded-md p-2 flex justify-between items-center">
                    <div>
                      <span className="text-white text-xs">Subscriptions</span>
                      <div className="text-white/70 text-xs">This week</div>
                    </div>
                    <div className="text-white font-medium">$189.99</div>
                  </div>
                </div>
              </div>
            )}
            
            {feature.title === "Voice Chat" && (
              <div className="absolute inset-0">
                <div className="rounded-lg bg-gradient-to-b from-amber-900/40 to-black h-32 mb-3 flex flex-col items-center justify-center relative">
                  <div className="flex flex-wrap justify-center gap-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-b from-amber-800/40 to-black flex items-center justify-center">
                        <User size={24} className="text-white/80" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-2 flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-amber-600/80 flex items-center justify-center">
                      <Mic size={16} className="text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center">
                      <Mic size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-amber-900/20 p-2 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-800/50 flex items-center justify-center mr-2">
                        <User size={16} className="text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white/90 text-xs">User1</h4>
                        <div className="h-1 bg-amber-500/60 rounded-full w-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-900/20 p-2 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-800/50 flex items-center justify-center mr-2">
                        <User size={16} className="text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white/90 text-xs">User2</h4>
                        <div className="h-1 bg-gray-500/60 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {feature.title === "Verified Status" && (
              <div className="absolute inset-0">
                <div className="rounded-lg bg-gradient-to-b from-indigo-900/60 to-black h-36 mb-3 p-4 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-indigo-800/60 to-purple-900/60 flex items-center justify-center mb-2 border-2 border-royal-gold">
                    <User size={32} className="text-white/90" />
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-white text-sm font-bold">@TopCreator</h3>
                    <BadgeCheck size={16} className="text-royal-gold ml-1" />
                  </div>
                  <div className="text-white/70 text-xs">Verified Broadcaster</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-md p-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <Award className="text-royal-gold mr-2" size={16} />
                      <span className="text-white text-xs">Premium Features</span>
                    </div>
                    <div className="text-royal-gold text-xs">UNLOCKED</div>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-md p-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="text-royal-gold mr-2" size={16} />
                      <span className="text-white text-xs">Priority Ranking</span>
                    </div>
                    <div className="text-royal-gold text-xs">ENABLED</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Bar */}
          <div className="h-12 pt-2 mt-auto">
            <div className="flex justify-around">
              <div className="w-10 h-5 bg-white/10 rounded-full"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white/30"></div>
              <div className="w-10 h-5 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneMockups = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
        Experience Sambow on Your Device
      </h2>
      <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
        Discover all of Sambow's premium features designed for creators and viewers alike. 
        Our platform delivers a complete live streaming experience with monetization options.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <PhoneMockup feature={feature} />
            <div className="mt-6 text-center">
              <h3 className="text-white font-bold">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhoneMockups;
