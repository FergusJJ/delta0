import { FeatureBox } from "@components/FeatureGrid/FeatureBox";
import { FeatureGrid } from "@components/FeatureGrid/FeatureGrid";

export default function SwapValueProp() {
  const heading = "Transparent Swaps, In App";
  const subheading =
    "Our bridging portal displays the best routes to both swap and bridge at once - and we update you at every step along the way.";
  const swapCallToAction = "Swap crypto now";

  return (
    <div style={{ alignSelf: "start", width: "100%" }}>
      <section>
        <FeatureGrid layout={["1fr", "4fr", "4fr", "1fr"]}>
          <div></div>
          {/**/}
          <FeatureGrid>
            <FeatureBox title={heading} description={subheading}></FeatureBox>
          </FeatureGrid>
          {/**/}
          <div>
            <p> image here</p>
          </div>
          {/**/}
          <div></div>
        </FeatureGrid>
      </section>
    </div>
  );
}
