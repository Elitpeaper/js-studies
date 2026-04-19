# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a vanilla JavaScript learning repository (`js-studies`) containing browser-runnable examples for ES6+ concepts. No build tools, no package manager, no dependencies.

## Running Code

Each topic lives in its own folder with an `index.html` and a JS file. To run any example, open the `index.html` in a browser and inspect the **Console** tab in DevTools (F12). There is no build step.

## Repository Structure

Each folder is a standalone module on a specific JavaScript topic:

| Folder | Topic |
|--------|-------|
| `class/` | ES6 classes, inheritance, static methods, getters/setters |
| `functions/` | Arrow functions, IIFE, rest/spread, `reduce` |
| `objects/` | Scoping (`var`/`let`/`const`), `Object.keys/values/entries/freeze/seal` |
| `highOrderFuncstions/` | `map`, `filter`, `sort`, `every`, `some`, `find`, callbacks, timers |
| `destructuring,spread.rest/` | Array/object destructuring, renaming, spread, rest params |
| `regex/` | Pattern flags, `.match()`, `.replace()`, digit groups |
| `json/` | `JSON.parse` with reviver, `JSON.stringify` with formatting |
| `localstorage/` | `localStorage` API, serialized object persistence |

## Code Conventions

- Comments are in Turkish; code identifiers are English.
- All output is via `console.log()` — no DOM manipulation except the `localstorage/` module.
- Examples are self-contained: each JS file can be read independently without shared utilities.
