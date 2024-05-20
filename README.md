# Tree View

Part 6 of the freeCodeCamp 25 React Projects for interview.

This project implements a recursive, tree-view navigation menu for a web application using React. The menu structure is defined in a hierarchical format, supporting nested sub-menus with multiple levels.

Key Features:

- Recursive Tree-View: The menu is built to handle multiple levels of nested items, allowing for complex hierarchical navigation structures.

- Dynamic Toggle: Users can expand and collapse menu items to reveal or hide sub-menus, providing a clean and intuitive user interface.

- Reusable Components: The menu is constructed using modular components, including TreeView, MenuList, and MenuItem, making the codebase maintainable and scalable.

- Icons for Interaction: Interactive elements are enhanced with icons (FaPlus and FaMinus from react-icons) to indicate expandable and collapsible items.

- CSS Styling: Custom styles are applied to ensure the menu is visually appealing and user-friendly.

Components:

- TreeView: The main component that initiates the menu rendering.
- MenuList: A component responsible for rendering a list of menu items.
- MenuItem: A component for individual menu items, managing the state for showing or hiding its children.