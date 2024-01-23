import React from "react";

type Props = {
  heading: string;
  content: string;
  img_url: string;
  backgroundTag: string;
  orientationTag: string;
};

const HeroImg = (props: Props) => {
  return (
    <div
      className={"".concat(
        props.backgroundTag,
        " ",
        "flex justify-center min-w-full py-20"
      )}
    >
      <div className="hero max-w-4xl min-h-80">
        <div className={`hero-content flex-col md:${props.orientationTag}`}>
          <img
            src={props.img_url}
            className="max-w-sm rounded-2xl shadow-xl drop-shadow-xl mx-2"
          />
          <div>
            <h1 className="text-5xl font-bold font-Rserif">{props.heading}</h1>
            <p className="py-6">{props.content}</p>
            <button className="btn btn-primary hover:bg-orange-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
