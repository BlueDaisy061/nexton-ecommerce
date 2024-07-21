export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center min-w-64">
      <div>{icon}</div>
      <div className="ml-[0.8rem]">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
