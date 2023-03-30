import styles from "./ListGroup.module.css";

const ListGroup = () => {
  return (
    <ul className={[styles.ListGroup, styles.big].join(" ")}>
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
};

export default ListGroup;
