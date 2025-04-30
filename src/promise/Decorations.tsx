// Decorations.tsx (装饰元素组件)
import React from "react";

// 玫瑰花边框
export const RoseBorder = ({ position }: { position: "top" | "bottom" }) => (
    <div className={`rose-border ${position}-rose`} />
);

// 花瓣背景
export const RosePetalsBackground = ({ count }: { count: number }) => (
    <div className="rose-petals">
        {[...Array(count)].map((_, i) => (
            <div key={i} className="rose" />
        ))}
    </div>
);