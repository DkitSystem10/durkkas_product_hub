import React from 'react';
import { Bookmark } from 'lucide-react';

interface ProfileCardProps {
    name: string;
    username?: string;
    LogoComponent: React.ReactNode;
    lessons: string[];
    cardBg: string;
    avatarBg: string;
    className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    LogoComponent,
    lessons,
    cardBg,
    className = ""
}) => {
    return (
        <div className={`relative flex flex-col items-center p-8 h-[440px] rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-2 border-white/20 transition-all duration-300 ${cardBg} ${className}`}>
            {/* Premium Minimalist Avatar Spot */}
            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {LogoComponent}
            </div>

            <div className="text-center w-full overflow-hidden">
                <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">{name}</h3>

                {/* Full Feature List - Optimized for Senior Design */}
                <div className="space-y-2.5 mt-2 border-t border-white/10 pt-5">
                    {lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 shrink-0" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.12em] leading-tight text-center">{lesson}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-[2.5rem] pointer-events-none" />
        </div>
    );
};

export default ProfileCard;
