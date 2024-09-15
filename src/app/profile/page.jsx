"use client";

import { useUser } from "@clerk/nextjs";

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </div>
    );
  }

  const { emailAddresses, imageUrl, lastSignInAt } = user;
  const primaryEmail = emailAddresses.length > 0 ? emailAddresses[0].emailAddress : "No email address available";
  const formattedLastSignIn = lastSignInAt ? new Date(lastSignInAt).toLocaleString() : "No sign-in data available";

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 max-w-md mx-auto min-h-screen">
      <div className="flex flex-col items-center text-center">
        <img 
          src={imageUrl || "https://via.placeholder.com/150"} 
          alt="Profile" 
          className="w-36 h-36 rounded-full border-2 border-gray-300 object-cover mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Profile</h1>
        <p className="text-lg font-medium mb-2">
          <strong>Email:</strong> {primaryEmail}
        </p>
        <p className="text-lg font-medium">
          <strong>Last Sign-In:</strong> {formattedLastSignIn}
        </p>
      </div>
    </div>
  );
};

export default Profile;
