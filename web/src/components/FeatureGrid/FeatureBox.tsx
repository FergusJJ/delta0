import s from "./FeatureBox.module.css";

type FeatureBoxProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className={s.featureBox}>
      <div className={s.iconWrapper}>{icon}</div>
      <h3 className={s.featureTitle}>{title}</h3>
      <p className={s.featureDescription}>{description}</p>
    </div>
  );
}
