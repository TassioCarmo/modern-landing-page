import ButtonSvg from "../assets/svg/ButtonSvg";

/* Defines a functional component Button 
  that dynamically constructs CSS classes based on props and conditionally renders a button or anchor element.
*/

const Button = ({ className, href, onClick, children, px, white }) => {
  /* Constructs a string of CSS classes for styling a button 
    based on the classes it's receiving from props/parents otherwise it's using  default .
  */
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
  ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  // Position the element relative to its container ensuring it appears above elements with lower z-index values.
  const spanClasses = "relative z-10";

  // Defines a function to render the button element.
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Defines a function to render an anchor element.
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Renders either a button or an anchor element based on the presence of href prop.
  return href ? renderLink() : renderButton();
};

export default Button;
