import classNames from "classnames";

function PrimaryButton({
  as: Component = "button",
  children,
  type = "button",
  variant = "solid",
  className,
  ...props
}) {
  const componentProps = Component === "button" ? { type } : {};

  return (
    <Component
      className={classNames(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2",
        variant === "solid" &&
          "bg-saffron text-white shadow-lg shadow-saffron/30 hover:-translate-y-0.5 hover:bg-orange-500",
        variant === "outline" &&
          "border border-navy/20 bg-white text-navy hover:border-navy hover:bg-navy hover:text-white",
        variant === "ghost" && "bg-transparent text-navy hover:bg-navy/5",
        className
      )}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default PrimaryButton;
