export const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <button className="rounded-full bg-primary text-sm text-default py-[10px] px-5">{title}</button>
  );
};

export const SecondaryButton = ({ title }: { title: string }) => {
  return (
    <button className="rounded-full bg-gray text-sm text-body-text py-[10px] px-5">{title}</button>
  );
};
