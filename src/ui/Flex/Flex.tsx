import styled from 'styled-components';
import type { ReactNode } from 'react';

const FlexedDiv = styled.div<FlexedDivProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.items || 'center'};
  gap: ${props => props.gap || '20%'};
  padding-left: ${props => props.left || '10%'};
  padding-right: ${props => props.right || '10%'};
  padding-top: ${props => props.paddingTop || 0};
  padding-bottom: ${props => props.paddingBottom || 0};
  border: ${props => props.flexBorder || 'none'};
  border-right: ${props => props.rightBorder || 'none'};
  margin-top:${props => props.top || "0"};
  width:${props=>props.width || "100%"};
  height:${props=>props.height || "auto"};
`;

type FlexProps = {
  children: ReactNode;
  className?: string;
  justify?: string;
  gap?: string;
  paddingTop?: string;
  left?: string;
  right?: string;
  paddingBottom?: string;
  flexBorder?: string;
  direction?: string;
  items?: string;
  rightBorder?: string;
  top?:string;
  width?:string;
  height?:string;
};

type FlexedDivProps = {
  justify?: string;
  gap?: string;
  paddingTop?: string;
  paddingBottom?: string;
  left?: string;
  right?: string;
  flexBorder?: string;
  direction?: string;
  items?: string;
  rightBorder?: string;
  top?:string;
  width?:string;
  height?:string;
};

const Flex = ({
  children,
  className,
  justify,
  gap,
  paddingBottom,
  paddingTop,
  direction,
  left,
  right,
  items,
  rightBorder,
  flexBorder,
  top,
  width,
  height
}: FlexProps) => {
  return (
    <FlexedDiv
      className={className}
      justify={justify}
      gap={gap}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      direction={direction}
      items={items}
      flexBorder={flexBorder}
      rightBorder={rightBorder}
      left={left}
      right={right}
      top={top}
      width={width}
      height={height}
    >
      {children}
    </FlexedDiv>
  );
};

export default Flex;
