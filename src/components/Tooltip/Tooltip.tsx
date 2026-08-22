// import { useState } from "react";

// type Props = {
//   content: string,
//   children: React.ReactNode
// }

// const Tooltip = ({ content, children }: Props) => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div
//       className="relative inline-block"
//       onMouseEnter={() => setIsVisible(true)}
//       onMouseLeave={() => setIsVisible(false)}
//     >
//       {children}

//       {/* TODO: only render the bubble below when isVisible is true */}
//       {/* TODO: bubble div — absolute positioned above the trigger, small dark background, white text */}
//     </div>
//   )
// }

// export default Tooltip


import { useState } from "react";

type Props = {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

const positionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = ({ content, children, position = "top" }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div className={`absolute z-50 bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap ${positionClasses[position]}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;