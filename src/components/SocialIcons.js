import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons() {
  return (
    <div className="my-2">
      <SocialIcon
        className="mx-2 focus:shadow-outline focus:outline-none"
        url="https://github.com/asjas"
      />
      <SocialIcon
        className="mx-2 focus:shadow-outline focus:outline-none"
        url="https://twitter.com/_asjas"
      />
      <SocialIcon
        className="mx-2 focus:shadow-outline focus:outline-none"
        url="https://linkedin.com/in/asjasroos"
      />
    </div>
  );
}
