import { ConnectButton } from "thirdweb/react";
import s from "./banner.module.css";
import client from "../../util/client";

export default function Banner() {
  return (
    <nav className={s.banner}>
      <p>banner elem 1</p>
      <p>Banner elem 2</p>
      <ConnectButton client={client} />
    </nav>
  );
}
