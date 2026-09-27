import { useRef, useState } from "react";
import type { NavItem } from "../../constant/constants-types";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavItemComponent = ({
  item,
  className,
}: {
  item: NavItem;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasChildren = item.children && item.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <li
      className={`${hasChildren ? "relative" : ""} ${className ?? ""}`}
      onMouseEnter={hasChildren ? handleMouseEnter : undefined}
      onMouseLeave={hasChildren ? handleMouseLeave : undefined}
    >
      {hasChildren ? (
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-primary py-2"
          onClick={handleClick}
          aria-expanded={open}
        >
          <span className="text-md">{item.title}</span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      ) : (
        <Link
          to={item.href ?? "#"}
          className="flex items-center gap-1 text-md hover:text-primary cursor-pointer py-2"
        >
          {item.title}
        </Link>
      )}

      {hasChildren && open && (
        <ul className="grid md:absolute md:top-full md:left-0 md:mt-1 md:w-56 md:bg-white md:border md:rounded-xl md:shadow-lg md:z-50">
          {item.children!.map((child, idx) => (
            <NavItemComponent
              key={idx}
              item={child}
              className="px-4 rounded-md hover:bg-slate-50 last:border-b-0"
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItemComponent;