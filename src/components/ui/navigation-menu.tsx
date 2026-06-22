import { useRef, useState } from "react";
import type { NavItem } from "../../constant/constants-types";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavItemComponent = ({
  item,
  children,
}: {
  item: NavItem;
  children?: string;
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
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex items-center gap-1 cursor-pointer hover:text-primary ${children}`}
        onClick={handleClick}
      >
        {item.href && !hasChildren ? (
          <Link
            to={item.href}
            className="text-md
          "
          >
            {item.title}
          </Link>
        ) : (
          <span className="text-md">{item.title}</span>
        )}

        {hasChildren &&
          (open ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
      </div>

      {hasChildren && open && (
        <ul className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-50">
          {item.children!.map((child, idx) => (
            <NavItemComponent key={idx} item={child} children="p-4 border-b " />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItemComponent;
