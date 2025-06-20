Goals & Non-Goals

# Goals & Non-Goals

Nativewind was created by a small team with a defined set of goals and non-goals. These goals align closely with Tailwind CSS by also include the best principles for building universal applications.

## Goals

### Be a utility framework

Tailwind is not a complete styling solution and is not applicable everywhere you need styling. It also does not cover every use-case and prefers to provide a stable API that works for the majority.

### Support all RN platforms

We want to support and promote universal applications, and as such all platform are equal. The library should always produce styles in the media that works best on that platform (eg StyleSheet.create on native, CSS StyleSheet on web).

Components and styles should be portable between platforms and work with the same intentions.

### Align with Tailwind CSS

Design choices and implementation details of Tailwind CSS are inherited by this library. Sometimes this goes against the React Native 'way' but it allows us to better align with external tools and provide a universal experience.

Some examples:

* Use of the className property
* Use of className as a single string and being unable to pass an array

## Non-Goals

### Complete compatibility with all libraries

A common question is: How does this work with animation libraries? (eg Reanimated 2, Moti, etc)

Answer: This is a non-goal of the project and any compatibility is a coincidence.

Tailwind CSS has minimal support for animations and zero support for libraries that do not accept CSS classes.

If you were building a traditional web application with Tailwind CSS + Framer Motion, the two are separate systems that do not overlap.

When using Nativewind it's a good idea of adopt that philosophy and be adaptable to the tools available to you (either this library, StyleSheet.create, inline styles, etc)

### Polyfill the web

This library provides some low level shims for web functionality, but it does not plan on 100% compatibility.

These shims are picked based upon: ease of implementation, maintenance burden, benefit to the community, small runtime.

Features such as property `gap` or `grid` support are best implemented upstream within React Native.

If there is a shim you would like implemented please open an issue and we will consider it.
