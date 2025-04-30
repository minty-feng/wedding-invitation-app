// BlessingButton.tsx (祝福按钮组件)
import React from "react";

type ButtonProps = {
    hearts: number[];
    onClick: () => void;
};

export const BlessingButton = ({ hearts, onClick }: ButtonProps) => (
    <button className="rsvp-gold-btn" onClick={onClick}>
        <span>点击送祝福</span>
        <div className="sparkles" />
        {hearts.map((id) => (
            <div
                key={id}
                className="heart-bubble"
                style={{ left: `${Math.random() * 90}%` }}
            />
        ))}
    </button>
);