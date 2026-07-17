import { createFileRoute } from "@tanstack/react-router";
import { ProductOverview } from "./about";

export const Route = createFileRoute("/challenge-fit")({
  head: () => ({
    meta: [
      { title: "NOVA FieldOps Product Overview" },
      {
        name: "description",
        content:
          "NOVA FieldOps product overview for operator-approved agricultural robot mission planning.",
      },
    ],
  }),
  component: ChallengeFitAlias,
});

function ChallengeFitAlias() {
  return <ProductOverview title="NOVA FieldOps Product Overview" />;
}
