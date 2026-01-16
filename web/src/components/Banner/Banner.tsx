import { ConnectButton } from "thirdweb/react";
import client from "../../util/client";
import s from "./banner.module.css";
import { Link } from "react-router-dom";

type NavLinkProps = {
  location: string;
  label: string;
};

function NavLink({ location, label }: NavLinkProps) {
  return (
    <Link to={location} className={s.navLink}>
      {label}
    </Link>
  );
}

export default function Banner() {
  return (
    <nav className={s.banner}>
      <div className={s.bannerLinks}>
        <NavLink location={"/"} label={"home"} />
        <NavLink location={"/screen-2"} label={"screen-2"} />
      </div>
      <ConnectButton client={client} />
    </nav>
  );
}
