
import { policyData } from "./PolicyData";
// import { policyData } from "./policyData";
import PolicyCard from "./PolicyCard";

export default function Policies() {
  return (
    <section>
      <div>
        {policyData.map((policy) => (
          <PolicyCard
            key={policy.id}
            policy={policy}
          />
        ))}
      </div>
    </section>
  );
}
