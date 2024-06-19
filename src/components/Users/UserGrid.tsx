import React from "react";
import UserCard from "./UserCard";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const UserGrid: React.FC = () => {
  const results = useFetchUsers();

  return (
    <div style={styles.grid}>
      {results &&
        results.length > 0 &&
        results.map((element: any) => {
          if (element.isSuccess) {
            return <UserCard key={element.data.id} user={element.data} />;
          }
        })}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "16px",
  },
};

export default UserGrid;
