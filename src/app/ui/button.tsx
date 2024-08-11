export const PrimaryButton = ({
  title,
  leftIcon,
  rightIcon,
  style,
}: {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
  style?: string;
}) => {
  return (
    <button
      className={`${style} rounded-full flex gap-2 items-center bg-primary-color text-sm text-default py-[10px] px-5 lg:py-4 lg:px-8 lg:text-base`}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export const SecondaryButton = ({ title, style }: { title: string; style?: string }) => {
  return (
    <button className={`${style} rounded-full bg-gray text-sm text-body-text py-[10px] px-5`}>
      {title}
    </button>
  );
};
