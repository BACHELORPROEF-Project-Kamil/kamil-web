<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Workflow & Operations

### Project Context
- **Mandatory Initialization:** At the start of every prompt or task, you **must** explore and analyze the entire project structure. Ensure you fully understand the file hierarchy and existing logic before suggesting or making any changes.

### Git & Commit Protocol
- **Strict Permission:** You are **never** allowed to perform a commit without explicit user permission.
- **Major Changes:** For any significant architectural changes, large refactors, or new features, you must explain your plan and ask for specific approval before proceeding with the work.

## Development Standards & UI Guidelines

### Architecture & Styling
- **Styling:** Always use Tailwind utility classes for styling. Avoid external CSS or inline styles.
- **Components:** Keep components small, modular, and functional. Adhere to the Single Responsibility Principle.

### Color Palette (Design Tokens)
Use the following hex codes for all component styling:
- **Surfaces:**
  - `background: #FFFFFF`
  - `accent-background: #EEF9F4`
- **Brand Colors:**
  - `accent-green: #054431`
  - `accent-orange: #FF805C`
- **Typography:**
  - `title-green: #054431`
  - `body-green: #2D6A4F`
- **Status:**
  - `warning-background: #FFFDEA`
  - `warning-border: #FFC44F`

### Typography & Fonts
Strictly follow these font definitions:
- **Main-title:** Font: `Outfit`, Weight: 700 (bold), Size: 56px
- **Section-title:** Font: `Outfit`, Weight: 700 (bold), Size: 48px
- **Body:** Font: `Open Sans`, Weight: Regular (400), Size: 20px
- **Body-bold:** Font: `Open Sans`, Weight: 700 (bold), Size: 20px