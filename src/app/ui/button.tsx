export const PrimaryButton = ({
  title,
  leftIcon,
  rightIcon,
  style,
  onClick,
  type,
}: {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
  style?: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <button
      className={`${style} rounded-full flex gap-2 items-center justify-center bg-primary-color text-sm text-default py-[10px] px-5 lg:py-4 lg:px-8 lg:text-base`}
      onClick={onClick}
      type={type}
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
  type,
}: {
  title: string;
  style?: string;
  leftIcon?: any;
  rightIcon?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <button
      className={`${style} rounded-full bg-gray text-sm text-body-text py-[10px] px-5`}
      type={type}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};
