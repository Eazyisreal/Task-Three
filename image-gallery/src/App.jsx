import "./App.css";

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

import ImageGrid from "./components/ImageGrid";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
    <SignedIn>
      <ImageGrid />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
  );
}
