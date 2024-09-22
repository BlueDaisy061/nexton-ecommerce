export const PrimaryButton = ({
  title,
  leftIcon,
  rightIcon,
  style,
  onClick,
}: {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
  style?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={`${style} rounded-full flex gap-2 items-center bg-primary-color text-sm text-default py-[10px] px-5 lg:py-4 lg:px-8 lg:text-base`}
      onClick={onClick}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export const SecondaryButton = ({
  title,
  style,
  leftIcon,
  rightIcon,
}: {
  title: string;
  style?: string;
  leftIcon?: any;
  rightIcon?: any;
}) => {
  return (
    <button className={`${style} rounded-full bg-gray text-sm text-body-text py-[10px] px-5`}>
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};
