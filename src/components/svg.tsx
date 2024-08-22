export const AdjustableSVG = ({ width = 8, height = 90, strokeWidth = 0.8, circleRadius = 4, gap = 10 }) => {
    const lineStartY = circleRadius + strokeWidth + gap;
    const lineEndY = height - (circleRadius + strokeWidth + gap);

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
                x1={width / 2}
                y1={lineStartY}
                x2={width / 2}
                y2={lineEndY}
                stroke="#6E886E"
                strokeWidth={strokeWidth}
                strokeDasharray={`${strokeWidth * 4} ${strokeWidth * 4}`}
            />
            <circle cx={width / 2} cy={circleRadius + gap} r={circleRadius} fill="#264E26" />
            <circle cx={width / 2} cy={height - (circleRadius + gap)} r={circleRadius} fill="#264E26" />
        </svg>
    );
};