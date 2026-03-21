interface ButtonProps {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
  href?: string;
}

const Button = ({ name, isBeam = false, containerClass, href }: ButtonProps) => {
  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`btn ${containerClass}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`btn ${containerClass}`}>
      {content}
    </button>
  );
};

export default Button;
