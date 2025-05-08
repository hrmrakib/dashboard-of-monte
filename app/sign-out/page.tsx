"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  const signOut = () => {
    router.push("/signin");
  };

  return (
    <div className='container mx-auto px-4 py-8 md:py-16'>
      <div className='mb-8 flex items-center justify-center gap-2'>
        <LogOut className='h-6 w-6 text-teal-700' />
        <h1 className='text-3xl font-bold text-teal-700 md:text-4xl'>
          Sign Out
        </h1>
      </div>

      <div className='mx-auto max-w-md rounded-lg border bg-white p-8 shadow-sm'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='mb-4 rounded-full bg-gray-100 p-6'>
            <LogOut className='h-8 w-8 text-teal-700' />
          </div>
          <h2 className='mb-2 text-xl font-semibold'>
            Are you sure you want to sign out?
          </h2>
          <p className='mb-6 text-gray-500'>
            You will need to sign in again to access your account.
          </p>
          <div className='flex gap-4'>
            <Button variant='outline'>Cancel</Button>
            <Button
              onClick={() => signOut()}
              className='bg-teal-700 hover:bg-teal-800'
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
