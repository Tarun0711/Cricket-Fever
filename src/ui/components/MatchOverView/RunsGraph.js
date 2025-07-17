import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Path, Text as SvgText, Circle } from 'react-native-svg';

const polarToCartesian = (cx, cy, radius, angle) => {
  const rad = (angle - 90) * Math.PI / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    `M ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    `L ${x} ${y}`,
    'Z',
  ].join(' ');
};

const ScorePieChart = ({ data }) => {
const size = 81;
const center = size / 2;
const radiusOuter = size * 0.4; 
const radiusInner = size * 0.25;

  // Convert score count object to array
  const entries = Object.entries(data); // e.g. [["1",1],["2",2],["4",3],["6",1]]
  const totalCount = entries.reduce((sum, [, count]) => sum + count, 0);

  // Find the largest segment
  let largest = { score: '', count: 0 };
  entries.forEach(([score, count]) => {
    if (count > largest.count) {
      largest = { score, count };
    }
  });

  // Calculate angles for the largest segment
  const angle = largest.count > 0 ? (largest.count / totalCount) * 360 : 0;
  const startAngle = 0;
  const endAngle = angle;

  
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G>
          {/* Outer blue ring */}
          <Circle
            cx={center}
            cy={center}
            r={radiusOuter}
            fill="#327EE1"
            opacity={0.9}
          />
          {/* Inner blue ring */}
          <Circle
            cx={center}
            cy={center}
            r={radiusInner}
            fill="#5F9AE8"
            opacity={0.7}
          />

          {/* Red segment for largest */}
          {largest.count > 0 && angle > 0 && (
            <Path
              d={describeArc(center, center, radiusOuter, startAngle, endAngle)}
              fill="#F04329"
              opacity={0.8}
            />
          )}

          {/* Center text for largest count */}
          <SvgText
            x={center}
            y={center - 2}
            fontSize={14}
            fontWeight="400"
            fill="#fff"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {largest.count > 0 ? `${largest.count} ${largest.score}${largest.count > 1 ? '' : ''}` : 'No Data'}
          </SvgText>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScorePieChart;
