type User = {
    _id: string;
    firstName: string;
    lastName: string;
    city: string;
    age: number;
};
type Props = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export default function ProfileSection({ user, setUser }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ProfileSection.d.ts.map