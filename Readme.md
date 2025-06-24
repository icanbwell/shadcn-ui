## 🧩 ShadCN UI + Figma Tokens Setup

**With Tailwind CSS v4 + `@theme` directive**

---

### 🔷 What Is ShadCN UI?

ShadCN UI is a modern component system that:

- Gives **fully customizable React + Tailwind** components.
- Is built with **Radix UI** (for accessibility).
- Uses **CVA** (Class Variance Authority) for variant handling.
- Is **code-first** — you own and control the component source code.

---

### ✅ Benefits of This Stack

| Feature          | Benefit                                            |
| ---------------- | -------------------------------------------------- |
| 🧠 Full Control  | All component code is local and editable           |
| 🎨 Design Tokens | Works great with Figma + `@theme` tokens           |
| ⚡ Performance   | No runtime styling (unlike Chakra or Emotion)      |
| 🪄 Accessible    | Built on top of Radix UI primitives                |
| ✨ Tailwind v4   | Native support for design tokens and CSS variables |

---

### ❌ Limitations

- No default dark mode toggle (you add it)
- Not a plug-and-play component library
- Requires design/dev collaboration for tokens

---

## 🚀 How to Set Up ShadCN UI with Tailwind v4 + Figma Tokens

---

### ✅ 1. **Install Tailwind CSS v4 + ShadCN**

Make sure you're using Tailwind v4:

```bash
npm install -D tailwindcss@next
npx tailwindcss init
```

Install ShadCN UI:

```bash
npx shadcn-ui@latest init
```

Follow prompts:

- Choose `tailwind` for styling
- Choose `/src` or `/app` folder structure
- Choose `appDir` or `srcDir` as per your setup

---

### ✅ 2. **Use the Figma Plugin to Export Tokens**

Use your plugin to export tokens as:

```css
@import "tailwindcss";

@theme {
  --*: initial;

  /* Colors */
  --color-neutral-100: #e6e6e9;
  --color-neutral-500: #8c8f9a;
  --color-primary: #0f0fee;
  --color-danger: #ff4b4b;
  /* etc */
}
```

Save this as: `src/tokens.css`

---

### ✅ 3. **Import `tokens.css` in Tailwind Entry CSS**

Example: `src/index.css`

```css
@import "./tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### ✅ 4. **Use Tokens in Tailwind Classes Without `var()`**

With Tailwind v4’s `@theme`, you **don’t need `var()` syntax** anymore. Just reference the token name directly:

#### ✅ Example

```tsx
<button className="bg-color-primary text-white hover:bg-color-neutral-700 font-sans">
  Click me
</button>
```

Tailwind v4 auto-converts `bg-color-primary` to `background-color: var(--color-primary)` behind the scenes.

---

### ✅ 5. **Generate and Customize Components via ShadCN**

```bash
npx shadcn-ui@latest add button
```

Then update your `button.tsx` with new color tokens:

```ts
variant: {
  default: "bg-color-primary text-white hover:bg-color-primary/80",
  outline: "border border-color-primary text-color-primary hover:bg-color-primary/10"
}
```

---

## 🗂 Folder Structure (Recommended)

```
src/
├── components/ui/        # ShadCN components
├── tokens.css            # Exported from Figma plugin
├── index.css             # Tailwind entry + import
├── app/ or pages/
```

---

## ✅ Summary

| Stack Part       | Tool                   |
| ---------------- | ---------------------- |
| Component System | ShadCN UI              |
| Styling Engine   | Tailwind CSS v4        |
| Design Tokens    | Figma plugin (CSS)     |
| Token Format     | `@theme { --color-* }` |
| Token Usage      | `bg-color-primary`     |
