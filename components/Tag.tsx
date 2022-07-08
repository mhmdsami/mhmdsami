import React from "react";

interface TagProps {
    children: React.ReactNode;
}

const Tag = ({ children }: TagProps ) => {
    return (
        <div className="bg-red text-black-dark px-2 rounded-lg font-medium h-min w-min transition-all duration-300 hover:-translate-y-1">
            {children}
        </div>
    )
}

export default Tag;
