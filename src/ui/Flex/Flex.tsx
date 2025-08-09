import styled from 'styled-components';
import type { ReactNode } from 'react';

const FlexedDiv = styled.div<FlexedDivProps>`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
  gap: ${props => props.gap || '20%'};
  padding-left: 10%;
  padding-right: 10%;
`;

type FlexProps = {
  children: ReactNode;
  className?: string;
  justify?: string;
  gap?: string;
};

type FlexedDivProps = {
  justify?: string;
  gap?: string;
};

const Flex = ({ children, className, justify, gap }: FlexProps) => {
  return (
    <FlexedDiv className={className} justify={justify} gap={gap}>
      {children}
    </FlexedDiv>
  );
};

export default Flex;
