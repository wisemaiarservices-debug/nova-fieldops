# NOVA FieldOps Video Script

## Two-Minute Narration

Hello, I'm Wael Abessi, founder of NeoHaven AI Urban Labs.

This is NOVA FieldOps, a GenAI mission-planning layer for agricultural robots and field operations.

It is designed for AI-BOOST Challenge 1: GenAI-Based Natural Language Mission Generator for Autonomous Robots in Agriculture.

The problem is simple: agricultural operators think in natural field language, but robots need structured missions, constraints, maps, task steps, and safety checks.

For example, an operator can say:

"Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset."

NOVA FieldOps converts this instruction into a structured mission intent.

It identifies the task type, target zone, objective, constraints, priority, and approval requirement.

Then the system connects the mission to field context: vineyard rows, irrigation zones, wet zones, restricted equipment areas, base station, and high-risk crop-stress areas.

Next, it creates a mission plan: start from base, navigate to the target rows, avoid wet zones, capture crop imagery, check irrigation areas, flag anomalies, return to base, and generate a mission report.

Before execution, NOVA FieldOps runs safety validation.

It checks restricted zones, weather risk, battery requirements, terrain risk, missing data, and human approval.

The system does not perform autonomous physical execution. It generates operator-approved mission plans only.

Finally, NOVA FieldOps exports a structured mission output that can be adapted to robotic middleware, simulators, or partner robot systems.

The goal of the Spark Phase is to turn this into a focused Proof of Concept for vineyard and agricultural field operations, then validate it with challenge-owner feedback during the Advance Phase.

NOVA FieldOps makes agricultural robotics more accessible by turning human field intent into safe, structured, operator-approved robot missions.

## Route-by-Route Recording Plan

1. Open `/demo` and show the video-ready workflow page.
2. Pause on the natural-language instruction.
3. Scroll to generated mission intent and point out task type, target zone, constraints, and approval requirement.
4. Scroll to field context and show vineyard rows, irrigation sector A, wet zone, restricted area, base station, and high-risk stress area.
5. Scroll to mission plan and read the operator-review sequence.
6. Scroll to safety validation and emphasize missing-data warnings, human approval, and disabled autonomous execution.
7. Scroll to structured mission output and show the JSON export.
8. End on AI-BOOST fit and the Spark Phase candidate positioning.

## Safety Message

NOVA FieldOps generates operator-approved mission plans. It does not perform autonomous physical execution, does not claim field validation, and is scoped to civil agricultural applications.

## Closing Line

NOVA FieldOps turns human field intent into safe, structured, operator-approved robot missions for agricultural robotics.
