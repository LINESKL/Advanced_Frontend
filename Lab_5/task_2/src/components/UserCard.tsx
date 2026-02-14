import type { User } from "../types.ts";

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: React.ReactNode;
}

const UserCard = ({
    user,
    isActive = true,
    children
}: UserCardProps) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '10px', opacity: isActive ? 1: 0.5, borderRadius: '8px', marginBottom: '10px'}}>
            <h2>{user.name}</h2>
            <p>{user.email} | Age: {user.age}</p>
            {children}
        </div>
    )
}

export default UserCard;