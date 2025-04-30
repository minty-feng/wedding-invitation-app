import { useState, useEffect } from 'react';
import { Progress } from 'antd';
import './css/CountdownTimer.css';

/**
 * Formats a number to two digits with leading zero
 * @param num - The number to format (can be undefined)
 * @returns Formatted string as two digits (e.g., 5 becomes "05")
 */
const twoZeroFormat = (num: number | undefined) => {
    if (num) {
        return num.toString().padStart(2, '0');
    }
    return '00';
}

export const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    /**
     * Calculates remaining time and progress percentage
     * @returns Object containing time units and progress percentage, or undefined if invalid
     */
    function calculateTimeLeft() {
        // Timer configuration (1 year duration)
        const START_DATE = new Date('2024-06-01T00:00:00').getTime();
        const TARGET_DATE = new Date('2025-06-01T11:58:00').getTime();
        const now = Date.now();

        // Validation checks
        if (now >= TARGET_DATE) return undefined; // Timer expired
        if (now <= START_DATE) return undefined;  // Timer not started

        // Time calculations
        const difference = TARGET_DATE - now;
        const totalDuration = TARGET_DATE - START_DATE;
        const elapsed = now - START_DATE;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            percent: Math.round((elapsed / totalDuration) * 100),
        };
    };

    // Timer effect that updates every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-container">
            {/* First row - Time display */}
            <div>倒计时:</div>
            <div className="time-row">
                <div className="time-unit">
                    <div className="time-value">{timeLeft?.days}</div>
                    <div className="time-label">天</div>
                </div>

                <div className="time-separator">:</div>

                <div className="time-unit">
                    <div className="time-value">{twoZeroFormat(timeLeft?.hours)}</div>
                    <div className="time-label">时</div>
                </div>

                <div className="time-separator">:</div>

                <div className="time-unit">
                    <div className="time-value">{twoZeroFormat(timeLeft?.minutes)}</div>
                    <div className="time-label">分</div>
                </div>

                <div className="time-separator">:</div>

                <div className="time-unit">
                    <div className="time-value">{twoZeroFormat(timeLeft?.seconds)}</div>
                    <div className="time-label">秒</div>
                </div>
            </div>

            {/* Second row - Progress bar */}
            <div className="progress-row">
                <span className="progress-value">完成进度:</span>
                <Progress
                    percent={timeLeft?.percent}
                    strokeColor={{
                        '0%': '#ffd591',
                        '100%': '#ff7a45',
                    }}
                    strokeWidth={8}
                    trailColor="#52c41a" // Green color for remaining portion
                    format={() => `${timeLeft?.percent}%`}
                />
            </div>
        </div>
    );
};