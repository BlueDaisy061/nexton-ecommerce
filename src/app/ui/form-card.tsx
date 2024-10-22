import { PropsWithChildren } from 'react';

type FormCardProps = {
  title: string;
  prefix?: JSX.Element;
};

export const FormCard = (props: PropsWithChildren<FormCardProps>) => {
  return (
    <div>
      <div className="border border-border rounded-t-2xl p-5 flex gap-3">
        <div className="w-5 h-5 text-body-text">{props.prefix}</div>
        <p className="uppercase">{props.title}</p>
      </div>
      <div className="border border-border border-t-0 rounded-b-2xl p-5 pb-8">{props.children}</div>
    </div>
  );
};
