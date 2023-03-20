import React from 'react';

const sivas = () => {
  return (
    <div class="flex min-h-screen items-center justify-center">
      <div class="animate-heartbeat flex h-60 w-60 items-center justify-center bg-gradient-to-t from-purple-600 via-rose-400 to-amber-200 will-change-transform">
        <div class="relative flex h-full w-full items-center justify-center bg-white mix-blend-screen">
          <div class="relative h-32 w-32 rotate-45 bg-black before:absolute before:inset-0 before:-top-1/2 before:rounded-t-full before:bg-black after:absolute after:inset-0 after:-left-1/2 after:rounded-l-full after:bg-black"></div>
          <div class="absolute top-0 right-0 h-16 w-16 rounded-full bg-white/50 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default sivas;
