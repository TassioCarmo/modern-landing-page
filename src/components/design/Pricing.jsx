import { lines } from "../../assets";

/*
  renders an image of lines, hidden on small screens (hidden lg:block). 
  On larger screens, it's positioned absolutely at the top-middle of its container,
  extending to the right (right-full). It has a specific width and height,
  and it's translated vertically to the center (-translate-y-1/2). 
  Pointer-events-none ensures that it doesn't interfere with pointer events.
*/ 
export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
