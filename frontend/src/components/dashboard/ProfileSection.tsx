import axios from "axios";

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

export default function ProfileSection({ user, setUser }: Props) {
  if (!user) {
    return null;
  }
  const handleUpdate = async () => {
    const res = await axios.patch(
      "http://localhost:3000/api/v1/user/update",
      user,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    );
    alert("Updated successfully");
    console.log("updated user", res.data);
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        👤 Your Profile
      </h2>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded-lg border border-gray-200 text-sm"
          value={user.firstName}
          onChange={(e) =>
            setUser((prev) =>
              prev ? { ...prev, firstName: e.target.value } : prev,
            )
          }
          placeholder="First Name"
        />

        <input
          className="w-full p-3 rounded-lg border border-gray-200 text-sm"
          value={user.lastName}
          onChange={(e) =>
            setUser((prev) =>
              prev ? { ...prev, lastName: e.target.value } : prev,
            )
          }
          placeholder="Last Name"
        />

        <input
          className="w-full p-3 rounded-lg border border-gray-200 text-sm"
          value={user.city}
          onChange={(e) =>
            setUser((prev) => (prev ? { ...prev, city: e.target.value } : prev))
          }
          placeholder="City"
        />

        <input
          type="number"
          className="w-full p-3 rounded-lg border border-gray-200 text-sm"
          value={user.age}
          onChange={(e) =>
            setUser((prev) =>
              prev ? { ...prev, age: Number(e.target.value) } : prev,
            )
          }
          placeholder="Age"
        />

        <button
          onClick={handleUpdate}
          className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
