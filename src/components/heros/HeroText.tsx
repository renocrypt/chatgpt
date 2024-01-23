import React from "react";

type Props = object;

const HeroText = (props: Props) => {
  return (
    <div className="hero min-h-screen bg-red-100">
      <div className="hero-content text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-black font-Rserif">
            Unleashing the Power of GPT at RenoCrypt
          </h1>
          <p className="py-6">
            Welcome to RenoGPTz, a distinguished subdomain of RenoCrypt, where
            the future of Generative Pre-trained Transformers (GPT) unfolds.
            Here, we do not just observe the evolution of AI; we are the
            vanguard, shaping it. RenoGPTz is your premier destination for
            exploring, acquiring, and interacting with an extensive array of
            custom GPT models, each meticulously crafted and maintained to
            revolutionize how you interact with technology.
          </p>
          <button className="btn btn-primary">Renocrypt</button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
