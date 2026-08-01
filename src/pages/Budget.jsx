import React from 'react'
import ProfileBar from '../components/ProfileBar';
import { usePageSwipe } from '../components/PageSwipe';

export default function Budget({isSignedIn, isMobile}) {
    const handlers = usePageSwipe({
        leftRoute: "/transactions"
      });
  return isSignedIn && isMobile ? (
      <div {...handlers} className="min-h-screen sm:px-6 md:px-8 lg:px-10">
        <ProfileBar />
        <div className="flex px-6 flex-col gap-2">
          <h1 className="text-white text-2xl">Budget</h1>
        </div>
      </div>
  ) : null;
}
