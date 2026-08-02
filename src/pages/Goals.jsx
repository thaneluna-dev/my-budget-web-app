import React from 'react';
import { usePageSwipe } from '../components/PageSwipe';
import ProfileBar from '../components/ProfileBar';

const Goals = ({ isSignedIn, isMobile }) => {
  const handlers = usePageSwipe({
    leftRoute: "/budget"
  });

  return isSignedIn && isMobile ? (
    <div {...handlers} className="min-h-screen md:px-8 lg:px-10">
      <ProfileBar />
      <div className="flex px-6 flex-col gap-3">
        <h1 className="text-white text-2xl">Goals</h1>
      </div>
    </div>
  ) : null;
};


export default Goals;
