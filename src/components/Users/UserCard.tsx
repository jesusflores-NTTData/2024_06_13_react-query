import { useState } from "react";
import { User } from "../../domain/model/User";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  setTimeout(() => {
    setIsFadingOut(true);
  }, 2500);

  return (
    <div
      style={{
        ...styles.card,
        ...styles.fadeIn,
        ...(isFadingOut ? styles.fadeOut : ""),
      }}
    >
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong>
        <br />
        {user.address.street},<br />
        {user.address.city}, {user.address.state} {user.address.zip}
      </p>
      <p>
        <strong>Recent Purchases:</strong> {user.recentPurchases.join(", ")}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    heigth: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  fadeIn: {
    opacity: "0",
    transform: "scale(0.9)",
  },
  fadeOut: {
    opacity: "1",
    transform: "scale(1)",
    transition: "opacity 0.5s, transform 0.5s",
  },
};

export default UserCard;
