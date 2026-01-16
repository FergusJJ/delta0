import client from "../../util/client";
import s from "./Home.module.css";
import { useActiveWallet, useConnectModal } from "thirdweb/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../Button/Button";

function HomeCopy() {
  const title = "Delta0";
  const tagline =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur";
  return (
    <div className={s.copyWrapper}>
      <p className={s.title}>{title}</p>
      <p className={s.tagline}>{tagline}</p>
    </div>
  );
}

function GetStarted() {
  const navigate = useNavigate();
  const wallet = useActiveWallet();
  const { connect, isConnecting } = useConnectModal();
  const handleClick = () => {
    if (!wallet) {
      void handleConnect();
      return;
    }
    navigate("/screen-2");
  };
  const handleConnect = async () => {
    const wallet = await connect({ client }); // opens the connect modal
    console.log("connected to", wallet);
  };

  const label = "Get Started";
  return (
    <Button
      color="var(--bg-dark)"
      bgColor="var(--accent-green)"
      disabled={isConnecting}
      onClick={handleClick}
      label={label}
      icon={<MdOutlineArrowOutward />}
      glow
    />
  );
}

export default function Home() {
  return (
    <div className={s.homeWrapper}>
      <HomeCopy />
      <GetStarted />
    </div>
  );
}
