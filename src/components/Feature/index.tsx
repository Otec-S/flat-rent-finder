interface Props {
  featureName: string;
  isChecked: boolean;
  onChange: () => void;
}

const Feature: React.FC<Props> = ({ featureName, isChecked, onChange }) => (
  <div>
    <label>
      {featureName}
      <input type="checkbox" checked={isChecked} onChange={onChange} />
    </label>
  </div>
);

export default Feature;
