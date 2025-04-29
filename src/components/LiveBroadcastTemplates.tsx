
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { User, Heart, MessageCircle, Share, Globe } from 'lucide-react';

type TemplateProps = {
  username: string;
  title: string;
  language: string;
  viewCount: string;
  likes: string;
  comments: string;
  imageUrl?: string;
}

const broadcastTemplates: TemplateProps[] = [
  {
    username: "sarah_creates",
    title: "Morning Routine Stream",
    language: "English",
    viewCount: "2.4K",
    likes: "845",
    comments: "128",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format"
  },
  {
    username: "محمد_المبدع",
    title: "بث مباشر للألعاب",
    language: "العربية",
    viewCount: "3.1K",
    likes: "1.2K",
    comments: "245",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format"
  },
  {
    username: "रवि_शर्मा",
    title: "संगीत और बातचीत",
    language: "हिन्दी",
    viewCount: "5.7K",
    likes: "2.3K",
    comments: "467",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format"
  },
  {
    username: "李明",
    title: "生活方式直播",
    language: "中文",
    viewCount: "8.2K",
    likes: "3.5K",
    comments: "612",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&auto=format"
  },
  {
    username: "marie_créatrice",
    title: "Diffusion de cuisine",
    language: "Français",
    viewCount: "1.9K",
    likes: "756",
    comments: "142",
  }
];

const BroadcastTemplate = ({ template }: { template: TemplateProps }) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-[420px] w-full bg-gradient-to-b from-purple-900/30 to-black/80 backdrop-blur-sm border border-white/10">
      {/* Background Image */}
      {template.imageUrl ? (
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: `url(${template.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/40 to-royal-gold/20" />
      )}
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 z-10">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-royal-purple to-royal-gold rounded-full flex items-center justify-center">
            <User className="text-white" size={18} />
          </div>
          <div>
            <h3 className="text-white font-medium">{template.username}</h3>
            <div className="flex items-center text-xs text-white/70">
              <Globe size={12} className="mr-1" /> 
              <span>{template.language}</span>
            </div>
          </div>
          <div className="ml-auto bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs text-white">
            LIVE
          </div>
        </div>

        {/* Stream Title */}
        <div className="my-2">
          <h2 className="text-white font-bold text-lg">{template.title}</h2>
        </div>
        
        {/* Bottom Stats & Controls */}
        <div className="flex flex-col space-y-4">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/20 rounded-full">
            <div className="h-full w-2/3 bg-gradient-to-r from-royal-purple to-royal-gold rounded-full" />
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Heart size={16} className="text-royal-gold mr-1" />
                <span className="text-white text-xs">{template.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="text-white/70 mr-1" />
                <span className="text-white text-xs">{template.comments}</span>
              </div>
              <div className="flex items-center">
                <Share size={16} className="text-white/70 mr-1" />
              </div>
            </div>
            <div className="text-white/80 text-xs">
              {template.viewCount} watching
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="flex space-x-2">
            <input 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 text-sm"
              placeholder="Say something..."
            />
            <button className="bg-royal-gold/90 hover:bg-royal-gold text-white p-2 rounded-full transition-colors">
              <Share size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveBroadcastTemplates = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
        Live Broadcast Experience
      </h2>
      
      <div className="mb-6">
        <p className="text-white/80 text-center max-w-2xl mx-auto">
          Explore how your streams will look across different languages and cultures. 
          Our platform provides a seamless multilingual experience for creators and viewers alike.
        </p>
      </div>
      
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-md mx-auto"
      >
        <CarouselContent>
          {broadcastTemplates.map((template, index) => (
            <CarouselItem key={index} className="md:basis-full">
              <div className="p-1">
                <BroadcastTemplate template={template} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
        <CarouselNext className="right-0 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
      </Carousel>
    </section>
  );
};

export default LiveBroadcastTemplates;
