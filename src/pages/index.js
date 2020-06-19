import React from "react";
import SocialIcons from "../components/SocialIcons";

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-display text-4xl my-4 text-center">
        Hey,
        <span role="img" aria-label="wave">
          👋
        </span>
        . I'm A-J Roos
      </h1>
      <p className="text-xl my-4 w-full md:w-1/2 text-center">
        I don't have the time to create or manage a personal website at the moment due to the amount
        of projects and work I have. You can reach out and connect with me on any of these
        platforms.
      </p>
      <SocialIcons />
      <p className="my-2 text-center">
        <em>
          You can also send me an email <a href="mailto:hey@asjas.xyz">hey@asjas.xyz</a>.
        </em>
      </p>
    </div>
  );
}
