// InvitationCard.tsx (核心卡片组件)
import React from "react";
import { BlessingButton } from "./BlessingButton";
import {CountdownTimer} from "./CountdownTimer";

type CardProps = {
    hearts: number[];
    onBlessing: () => void;
};

export const MainInvitationCard = ({ hearts, onBlessing }: CardProps) => (
    <div className="luxury-card">
        <div className="embossed-border">
            <div className="card-content">
                <h1 className="gold-title">
                    <span>囍</span> 订婚典礼 <span>囍</span>
                </h1>

                <div className="couple-section">
                    <div className="name yu">呦呦</div>
                    <div className="diamond-ring">💍</div>
                    <div className="name feng">锋锋</div>
                </div>

                <div className="gold-divider" />

                <div className="details-box">
                    <div className="calendar">
                        <div className="lunar-date">农历乙巳年五月初六</div>
                        <div className="solar-date">公元2025年6月1日</div>
                        <div className="time">吉时午时 11:58</div>
                        {<CountdownTimer />}
                    </div>


                    <div className="location-box">
                        <div className="venue">金玺宴会中心</div>
                        <div className="address">菏泽市鄄城县人民路188号</div>
                        <button
                            className="nav-btn"
                            onClick={() => window.open('https://amap.com/xxx')}
                        >
                            🗺 立即导航
                        </button>
                    </div>
                </div>

                <BlessingButton
                    onClick={onBlessing}
                    hearts={hearts}
                />
            </div>
        </div>
    </div>
);