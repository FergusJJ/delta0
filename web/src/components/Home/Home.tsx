import s from "./Home.module.css";
import GetStarted from "./Components/GetStarted";
import { FeatureGrid, FeatureBox } from "../FeatureGrid/FeatureGrid";
import {
  MdShield,
  MdSpeed,
  MdShowChart,
  MdAccountBalance,
} from "react-icons/md";

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

function WhySection() {
  return (
    <section className={s.whySection}>
      <h2 className={s.whyTitle}>Why Delta0?</h2>
      <p className={s.whySubtitle}>
        Stable yields through delta-neutral hedging strategies
      </p>
      <FeatureGrid layout={["1fr", "1fr", "1fr", "1fr"]}>
        <FeatureBox
          icon={<MdShield />}
          title="Delta Neutral"
          description="Your position is fully hedged, eliminating directional market risk while generating consistent yield."
        />
        <FeatureBox
          icon={<MdSpeed />}
          title="Real-Time Hedging"
          description="Automated rebalancing ensures your position stays neutral as market conditions change."
        />
        <FeatureBox
          icon={<MdShowChart />}
          title="Transparent Yields"
          description="All yield sources are on-chain and verifiable. No hidden fees or opaque strategies."
        />
        <FeatureBox
          icon={<MdAccountBalance />}
          title="Institutional Grade"
          description="Battle-tested smart contracts with comprehensive audits and proven security measures."
        />
      </FeatureGrid>
    </section>
  );
}

export default function Home() {
  return (
    <div className={s.homeWrapper}>
      <HomeCopy />
      <GetStarted />
      <WhySection />
    </div>
  );
}
