export const PrimaryButton = ({
  title,
  leftIcon,
  rightIcon,
}: {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
}) => {
  return (
    <button className="rounded-full flex gap-2 items-center bg-primary-color text-sm text-default py-[10px] px-5">
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export const SecondaryButton = ({ title }: { title: string }) => {
  return (
    <button className="rounded-full bg-gray text-sm text-body-text py-[10px] px-5">{title}</button>
  );
};
