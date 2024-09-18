import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 py-10 md:py-20">
      <SignUp />
    </div>
  );
}
