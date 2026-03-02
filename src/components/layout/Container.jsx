import classNames from "classnames";

function Container({ children, className }) {
  return (
    <div
      className={classNames("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

export default Container;
