import { createFileRoute } from "@tanstack/react-router";
import { ChallengeFit } from "./about";

export const Route = createFileRoute("/challenge-fit")({
  head: () => ({
    meta: [
      { title: "AI-BOOST Challenge 1 Fit - NOVA FieldOps" },
      { name: "description", content: "AI-BOOST Challenge 1 fit for NOVA FieldOps." },
    ],
  }),
  component: ChallengeFit,
});
