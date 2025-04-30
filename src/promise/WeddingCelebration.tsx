// WeddingCelebration.tsx (主组件)
import React, { useState } from "react";
import { RoseBorder, RosePetalsBackground } from "./Decorations";
import { MainInvitationCard } from "./InvitationCard";
import { CountdownTimer } from "./CountdownTimer";
import "./css/WeddingCelebration.css";

export const WeddingCelebration = () => {
    const [hearts, setHearts] = useState<number[]>([]);

    const handleBlessing = () => {
        setHearts(prev => [...prev, Date.now()]);
    };

    return (
        <div className="celebration-container">
            <RoseBorder position="top" />
            <RoseBorder position="bottom" />
            <MainInvitationCard
                hearts={hearts}
                onBlessing={handleBlessing}
            />

            <RosePetalsBackground count={30} />

            {/* 后续可扩展区域 */}
            {/* <WeddingGallery />
         <MusicPlayer />
         <LuckyDraw /> */}
        </div>
    );
};