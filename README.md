# 🃏 Developer Profile Cards

A clean, reusable **React** project that displays developer profiles. This application demonstrates the power of React **props**, **list rendering**, and **conditional logic** to create dynamic user interfaces.

## 🚀 Project Overview

This project consists of a `Card` component that accepts data (image, name, description, and skills) via props and renders a styled profile card. It automatically assigns emojis based on the skill level provided.

## ✨ Key Features

* **Reusable Component:** The `Card` component is designed to be used multiple times with different data.
* **Dynamic List Rendering:** Uses `.map()` to iterate through an array of skills, no matter how many are listed.
* **Conditional Logic:** Automatically appends specific emojis based on the skill level:
    * **Beginner:** 🐣
    * **Intermediate:** 👍
    * **Advanced:** 👌
* **Inline Styling:** Uses React inline style objects for a self-contained and scoped design.

## 🛠️ Tech Stack

* **React.js** (Functional Components)
* **JavaScript** (ES6+)
* **CSS** (Inline Styles)

## 💻 Installation & Usage

1.  **Clone the repository** (or download the files).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm start
    ```

## 📝 Code Example

Here is how the `Card` component is implemented within `App.js`:

```jsx
<Card
  image="/my-image.jpg"
  name="Abdullah Sawan"
  para="A passionate web developer..."
  skills={[
    { skill: "React", level: "Intermediate" },
    { skill: "Node.js", level: "beginner" },
    { skill: "HTML", level: "Advanced" }
  ]}
/>

📂 Project Structure

src/
├── App.js        # Main parent component
├── App.css       # Global styles
├── Card.js       # Reusable Card component
├── index.js      # Entry point
└── ...


👤 Author
Abdullah Mahmoud Sawan

