import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
    name: string;
    tagline: string;
    description: string;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, tagline, description, imageSrc }) => {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-10 h-full transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col group font-outfit text-left">
            {/* Header: Logo and Title side-by-side like screenshot */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0">
                    <img src={imageSrc} alt={`${name} Logo`} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[24px] font-semibold text-[#111827] leading-tight">
                    {name}
                </h3>
            </div>

            {/* Description: Starts below the logo line */}
            <p className="text-[#374151] text-[16px] leading-[1.6] mb-8 pr-2">
                {description}
            </p>

            {/* CTA: 'TRY NOW >' Style */}
            <div className="mt-auto">
                <button className="flex items-center gap-1.5 text-[#0052CC] text-[14px] font-bold tracking-wider uppercase hover:underline transition-all group/btn">
                    Try Now
                    <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
