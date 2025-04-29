
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'zh', name: '中文' },
  { code: 'fr', name: 'Français' }
];

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <div className="absolute top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition duration-300">
          <span>{language.name}</span>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/90 backdrop-blur-md border-none rounded-xl shadow-lg">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              className="cursor-pointer hover:bg-royal-purple/10 rounded-lg my-1 font-medium"
              onClick={() => setLanguage(lang)}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
