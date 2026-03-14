import { memo } from "react";
import type { User } from "./Dashboard";

interface UserCardProps {
  user: User;
}

export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    return (
      <div className="card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id && prevProps.user.email === nextProps.user.email;
  }
);