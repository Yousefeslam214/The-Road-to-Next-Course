import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center">
      {icon && typeof icon === "object" && "type" in icon
        ? cloneElement(icon, {
            className: "w-16 h-16",
          } as React.HTMLAttributes<HTMLElement>)
        : null}
      {/* {icon && <div className="mb-2">{icon}</div>} */}
      <h2 className="text-lg text-center">{label}</h2>
      {button && typeof button === "object" && "type" in button
        ? cloneElement(button, { className: "h-10" })
        : null}
    </div>
  );
};

export { Placeholder };
