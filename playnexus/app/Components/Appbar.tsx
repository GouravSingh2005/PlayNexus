"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session=useSession();
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">PlayNexus</div>
      <div>
        {session.data?.user&& <button 
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
          onClick={() => signOut()}
        >
          Sign out
        </button>}

        {!session.data?.user &&  <button 
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
          onClick={() => signIn()}
        >
          Sign In
        </button>}
       
      </div>
    </div>
  );
}
