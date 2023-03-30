import styles from "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";

interface Props {
  countries: string[];
}

const List = styled.ul`
  list-style: none;
  color: green;
`;

interface ListItemProps {
  active: boolean;
}

const LiItem = styled.li<ListItemProps>`
  font-size: 1.5rem;
  background: ${(props) => (props.active ? "pink" : "none")};
`;

const ListGroup = ({ countries }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <List>
      {countries.map((country, index) => (
        <LiItem
          key={index}
          onClick={() => setSelectedIndex(index)}
          active={selectedIndex === index}
        >
          {country}
        </LiItem>
      ))}
    </List>
  );
};

export default ListGroup;
