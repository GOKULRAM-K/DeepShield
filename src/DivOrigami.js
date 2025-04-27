import React from "react";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { LogoRolodex, LogoItem } from "./LogoRolodex";

export const DivOrigami = () => {
  return (
    <div className="logo-rolodex">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            H
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            A
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            C
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            K
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            H
          </LogoItem>,
          <LogoItem key={6} className="bg-yellow-300 text-neutral-900">
            O
          </LogoItem>,
          <LogoItem key={7} className="bg-red-300 text-neutral-900">
            B
          </LogoItem>,
          <LogoItem key={8} className="bg-pink-300 text-neutral-900">
            B
          </LogoItem>,
          <LogoItem key={9} className="bg-teal-300 text-neutral-900">
            I
          </LogoItem>,
          <LogoItem key={10} className="bg-cyan-300 text-neutral-900">
            T
          </LogoItem>,
        ]}
      />
    </div>
  );
};
