import { trustData } from "./trustData";
import TrustItem from "./TrustItem";

function TrustGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {trustData.map((item, index) => (
        <TrustItem
          key={item.label}
          item={item}
          index={index}
          total={trustData.length}
        />
      ))}
    </div>
  );
}

export default TrustGrid;