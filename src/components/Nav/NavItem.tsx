export interface Item {
  label: string;
  icons: JSX.Element;
  active?: boolean;
}
const NavItem = ({ props }: { props: Item }) => {
  return (
    <li
      className={`flex p-2 justify-end items-center cursor-pointer ${
        props.active ? "bg-cyan-800 text-white" : ""
      }`}
    >
      <h3 className="mr-2">{props.label}</h3>
      {props.icons}
    </li>
  );
};

export default NavItem;
