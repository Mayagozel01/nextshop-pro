import styled from 'styled-components';
import type { ReactNode } from 'react';

const FlexedDiv = styled.div<FlexedDivProps>`
  display: flex;
  flex-direction:${props=>props.direction || "row"};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.items || 'center'};
  gap: ${props => props.gap || '20%'};
  padding-left:${props => props.left || '10%'}
  padding-right:${props => props.right || '10%'}
  padding-top:${props=>props.paddingTop || 0};
  padding-bottom:${props=>props.paddingBottom || 0};
  border:${props=>props.flexBorder || "none"};
  border-right:${props=>props.rightBorder || "none"};
`;

type FlexProps = {
  children: ReactNode;
  className?: string;
  justify?: string;
  gap?: string;
  paddingTop?:string;
  left?:string;
  right?:string;
  paddingBottom?:string;
  flexBorder?:string;
  direction?:string;
  items?:string;
  rightBorder?:string;

};

type FlexedDivProps = {
  justify?: string;
  gap?: string;
  paddingTop?:string;
  paddingBottom?:string;
  left?:string;
  right?:string;
  flexBorder?:string;
  direction?:string;
  items?:string;
  rightBorder?:string;

};

const Flex = ({ ...props }: FlexProps) => {
  return (
    <FlexedDiv className={props.className} justify={props.justify} gap={props.gap} paddingTop={props.paddingTop} 
    paddingBottom={props.paddingBottom}
    direction={props.direction}
    items={props.items}
    flexBorder={props.flexBorder}
    rightBorder={props.rightBorder}
    left={props.left}
    right={props.right}
    >
      {props.children}
    </FlexedDiv>
  );
};

export default Flex;
