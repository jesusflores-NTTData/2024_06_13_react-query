import React from "react";
import UserCard from "./UserCard";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { User } from "../../domain/model/User";

const UserGrid: React.FC = () => {
  const { data, pending } = useFetchUsers();

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.grid}>
      {data &&
        data.length > 0 &&
        data.map((user: User) => {
          return <UserCard key={user.id} user={user} />;
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
