import React from "react";

type Props = object;

const Copyright = (props: Props) => {
  return (
    <footer
      className="footer footer-center fixed bottom-0 pt-3 pb-1 z-10 backdrop-blur-sm drop-shadow-md
      bg-white/10 dark:bg-black/90
    text-black dark:text-white"
    >
      <aside>
        <p>Copyright©2024 - All Right Reserved - RenoCrypt & AppCubic</p>
      </aside>
    </footer>
  );
};

export default Copyright;
