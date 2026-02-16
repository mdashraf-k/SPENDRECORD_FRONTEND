import FeatureCard from "./FeatureCard";

function FeaturesCarousel() {
  return (
    <div className="flex flex-col overflow-x-auto gap-6
    ">
      <FeatureCard
        iconBg="bg-blue-100 dark:bg-blue-900/30"
        iconColor="text-blue-600 dark:text-blue-400"
        title="Track Bills"
        description="Snap receipts and log utilities instantly."
      />

      <FeatureCard
        iconBg="bg-green-100 dark:bg-green-900/30"
        iconColor="text-green-600 dark:text-green-400"
        title="Settle Debts"
        description="Clear balances with one tap."
      />

      <FeatureCard
        iconBg="bg-purple-100 dark:bg-purple-900/30"
        iconColor="text-purple-600 dark:text-purple-400"
        title="Group Spending"
        description="Create groups for apartments or trips."
      />
    </div>
  );
}

export default FeaturesCarousel;
