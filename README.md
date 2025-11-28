# React Keyboard Accessibility Examples

This repository contains code examples that demonstrate how to make React components keyboard-accessible. It covers common issues like tab order, focus management, and missing ARIA attributes, and provides practical solutions for components such as forms, modals, and dropdowns.

## What You’ll Find Here

### 1. Logical DOM Order

Shows how the structure of JSX affects tabbing order. Keyboard users navigate elements in DOM order, not visual order, so a mismatch between layout and markup can confuse users.  
Includes examples of:

- Forms with incorrect vs correct field order
- How visual CSS rearrangement can break keyboard flow

### 2. Focus Management

Demonstrates strategies for keeping keyboard users oriented when components appear or disappear, such as modals, dropdowns, and popovers. Covers:

- Moving focus to the first interactive element on open
- Navigating though a list of options using the Arrow keys
- Returning focus to the trigger element on close
- Closing components with the Escape key

### 3. Proper ARIA Usage

Examples show how to communicate roles, states, and relationships to assistive technologies using attributes such as:

- `role`, `aria-label`, `aria-labelledby`, `aria-describedby`
- `aria-expanded`, `aria-hidden`, `aria-modal`
- `aria-checked`, `aria-current`, `aria-live`
