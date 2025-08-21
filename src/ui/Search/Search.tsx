import type { ReactNode } from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';

type SearchProps = {
  children?: ReactNode; // Optional children for additional content (if needed)
  value?: string; // Optional value for the input field
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Optional onChange handler for controlled input
};

const SearchDiv = styled(Flex)`
  height: 38px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  padding: 0 8px;
`;

const SearchInput = styled.input`
  color: #00000082;
  background-color: transparent;
  outline: none;
  border: none;
  flex: 1;
`;

const SearchIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

const Search = ({ children, value, onChange }: SearchProps) => {
  return (
    <SearchDiv justify="space-around" gap="10px">
      <SearchInput
        placeholder="What are you looking for?"
        value={value} // Use the value prop
        onChange={onChange} // Add onChange handler for controlled input
      />
      <SearchIcon viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </SearchIcon>
      {children} {/* Render children if provided */}
    </SearchDiv>
  );
};

export default Search;