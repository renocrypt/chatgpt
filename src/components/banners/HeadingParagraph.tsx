import React from "react";

type Props = {
  heading: string;
  paragraph: string;
};

const HeadingParagraph = (props: Props) => {
  return (
    <div className="flex justify-center flex-wrap pt-2 pb-4">
      <div className="max-w-4xl mx-4">
        <h1 className="p-2 font-Rserif text-4xl">{props.heading}</h1>
        <p className="text-lg">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default HeadingParagraph;
