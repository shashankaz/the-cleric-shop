"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("profile");
  const { user } = useUser();

  console.log(user);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </div>
    );
  }

  const { emailAddresses, lastSignInAt, fullName } = user;
  const primaryEmail =
    emailAddresses.length > 0
      ? emailAddresses[0].emailAddress
      : "No email address available";
  const formattedLastSignIn = lastSignInAt
    ? new Date(lastSignInAt).toLocaleString()
    : "No sign-in data available";

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-64 flex flex-col gap-2 mb-4 lg:mb-0 lg:mr-4">
        <button
          onClick={() => setTab("profile")}
          className={`px-4 py-2 text-left w-full rounded-lg ${
            tab === "profile"
              ? "bg-gray-200 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setTab("order")}
          className={`px-4 py-2 text-left w-full rounded-lg ${
            tab === "order" ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
          }`}
        >
          Order History
        </button>
      </div>

      <div className="flex-1">
        {tab === "profile" && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Name
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {fullName}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Email
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center gap-3">
                    {primaryEmail}
                    {emailAddresses[0].verification.status === "verified" ? (
                      <div className="px-2 py-1 text-xs bg-green-500 rounded-full text-black">
                        Verified
                      </div>
                    ) : (
                      <div className="px-2 py-1 text-xs bg-red-500 rounded-full text-black">
                        Not Verified
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Last Sign-In
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formattedLastSignIn}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-4 py-2 bg-black text-white rounded-lg mt-8 w-full md:w-28 mx-auto md:mx-0 max-w-xs text-center">
              <SignOutButton />
            </div>
          </div>
        )}
        {tab === "order" && <div>Order History</div>}
      </div>
    </div>
  );
};

export default Profile;
