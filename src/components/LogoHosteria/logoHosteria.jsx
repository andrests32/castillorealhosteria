const LogoHosteria = ({
  src = "/logocas.webp",
  alt = "logo hosteria castillo real",
  size = "h-20 w-20",
  className = ""
}) => {
  return (
    <div
      className={`flex hidden items-center justify-center mr-2 lg:block ${size} ${className}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default LogoHosteria;
