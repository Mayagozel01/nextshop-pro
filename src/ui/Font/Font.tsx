import styled from 'styled-components';
import type { ReactNode } from 'react';

const RegularFont = styled.h1<HProps>`
  color: ${props => props.color || props.theme.colors.black_1};
  font-size: ${props => props.fontSize || props.theme.fontSizes.regular_14};
  font-weight: ${props => props.fontWeight || '400'};
  text-decoration: ${props => props.textDecoration || 'none'};
`;

type HProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textDecoration?: string;
};

type Font = {
  children?: ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textDecoration?: string;
};

const Font = ({
  children,
  className,
  color,
  fontSize,
  fontWeight,
  textDecoration,
}: Font) => {
  return (
    <RegularFont
      className={className}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
    >
      {children}
    </RegularFont>
  );
};
export default Font;
