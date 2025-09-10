import { Separator } from "./ui/separator";

interface HeadingProps {
  title: string;
  desc?: string;
}

const Heading = ({ title, desc }: HeadingProps) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </div>
      <Separator />
    </>
  );
};

export { Heading };
