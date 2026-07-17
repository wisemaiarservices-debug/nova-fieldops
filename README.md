# NOVA FieldOps

NOVA FieldOps turns natural-language agricultural instructions into safe, structured, operator-approved robot mission plans.

## Overview

NOVA FieldOps is a focused NeoHaven AI Urban Labs product extension of NOVA OS / NeoAgro. It supports AI-BOOST Challenge 1: GenAI-Based Natural Language Mission Generator for Autonomous Robots in Agriculture.

This repository contains a challenge-focused PoC application. It does not claim field validation, real robot deployment, or production use.

## AI-BOOST Challenge 1 Fit

The product addresses the challenge need for transforming operator language into structured mission plans for agricultural robots. The workflow emphasizes safety, operator approval, missing-data warnings, and civil agricultural use.

## Product Workflow

Observe field intent -> analyze constraints -> generate mission intent -> validate safety gates -> require operator approval -> export structured mission output.

## Core Modules

- Natural-language mission generator
- Field map and zone context
- Mission review queue
- Safety validator
- Structured mission output
- Scenario workflows
- AI-BOOST Challenge Fit page

## Safety Principles

- Human approval before execution
- No autonomous physical execution
- Structured mission outputs
- Constraint validation
- Missing-data warnings
- Operator override
- Civil agricultural applications only

## Current Stage

NOVA FieldOps is a challenge-focused PoC extension of NOVA OS / NeoAgro. It has not yet been field-validated with agricultural robots. The Spark Phase would support development of the first focused mission-generation PoC.

## Routes

- `/`
- `/mission-generator`
- `/field-map`
- `/mission-review`
- `/safety-validator`
- `/mission-output`
- `/scenarios`
- `/about`
- `/challenge-fit`

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

The repository contains the extracted source project at the root. The previous ZIP-only artifact has been removed. Current work is scoped to product cleanup, challenge positioning, documentation, and build verification.

## Contact

NeoHaven AI Urban Labs

Website: https://neohaven-nova-os-website.vercel.app/

Email: wisemaiarservices@gmail.com
