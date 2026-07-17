# NOVA FieldOps

NOVA FieldOps turns natural-language agricultural instructions into safe, structured, operator-approved robot mission plans.

## Overview

NOVA FieldOps is a GenAI mission-planning layer for agricultural robots and field operations. It is a focused NeoHaven AI Urban Labs product extension of NOVA OS / NeoAgro.

The product helps agricultural operators convert plain-language field intent into structured mission plans with field context, constraints, safety validation, human review, and integration-ready structured outputs.

This repository may support accelerator or pilot applications, but the product is presented as a standalone NeoHaven platform.

## Product Workflow

Observe field intent -> analyze constraints -> generate mission intent -> validate safety gates -> require operator approval -> export structured mission output.

## Core Modules

- Natural-language mission generator
- Field map and zone context
- Mission review queue
- Safety validator
- Structured mission output
- Scenario workflows
- Video-ready product demo
- Product overview page

## Safety Principles

- Human approval before execution
- No autonomous physical execution
- Structured mission outputs
- Constraint validation
- Missing-data warnings
- Operator override
- Civil agricultural applications only

## Current Stage

NOVA FieldOps is a product-preview and PoC-ready extension of NOVA OS / NeoAgro. It is designed for scenario workflows, operator review, safety validation, and integration-ready structured mission outputs. Field validation and partner integrations are part of the next deployment pathway.

## Routes

- `/`
- `/demo`
- `/mission-generator`
- `/field-map`
- `/mission-review`
- `/safety-validator`
- `/mission-output`
- `/scenarios`
- `/about`
- `/challenge-fit` renders the neutral product overview content for compatibility.

## Development Commands

```bash
pnpm install
pnpm run dev
pnpm run typecheck
pnpm run build
pnpm run preview
pnpm run lint
```

Equivalent npm commands can be used in environments where npm is available.

## Repository Status

The repository contains the extracted source project at the root. The previous ZIP-only artifact has been removed. Current work is scoped to product cleanup, public product positioning, documentation, and build verification.

## Contact

NeoHaven AI Urban Labs

Website: https://neohaven-nova-os-website.vercel.app/

Email: wisemaiarservices@gmail.com
