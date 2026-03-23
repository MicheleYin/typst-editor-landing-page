**Frequently Asked Questions**

### Why doesn't the preview match my latest edits?
The preview updates when Typst compiles successfully. If there are errors, check the sidebar diagnostics. The last successful preview may stay visible until the document compiles again.

### How do I use my own fonts?
Open **Settings → Fonts**, import font files or a folder, then in your document use `#set text(font: "Family Name")` with the font's PostScript or display name. Otherwise, you can also add the font file in the project and Typst Editor will automatically detect it. Import to Settings if you want to reuse the font; keep it in the project if you want to use it only in that project.

### What are `@preview/…` packages?
They come from the Typst package registry. The first time you compile with a package, it is downloaded and cached. See **Package cache** for size and location; you can clear the cache if you need to reclaim space.

### How do I export (PDF, images, HTML)?
With a document open, use the export button in the header or **File → Export…** (in-app menu on mobile). Pick PDF (several standards), SVG, PNG (with PPI), or HTML, then choose where to save.

### Where are keyboard shortcuts configured?
**Settings → Shortcuts**. The editor also has Monaco's command palette (header button) for editor actions.

### How do files and projects work?
Typst Editor is built around **projects**: a folder that holds your `.typ` sources, assets, and usually a `main.typ`. You start from the **project hub**, then edit in the sidebar and editor—saves go into that project. Use **New File** to add more `.typ` files inside the project, **Import .typ** to copy files in, and **Export project** for a ZIP backup.

**On Mac, Windows, and Linux**, you open a folder on disk (or create a new subfolder in a location you pick). The app reads and writes those files directly—nothing is duplicated into hidden app storage. **Recent projects** is only a shortcut list; removing one from the list does not delete files.

**On iPhone and iPad**, projects live inside the app's sandbox (under **Files → On My iPhone/iPad**). You create projects there or **import a ZIP** (e.g., compress a folder in Files, then import the archive). Deleting a project from the hub removes that copy inside the app.

### Why do iPad and desktop work differently?
**iOS and iPadOS** use a strict **sandbox**: each app only has guaranteed access to its own container. It cannot silently read or write arbitrary folders elsewhere on the device the way a Mac app can. So projects are stored in the app's Documents area, and bringing work in often means **importing a ZIP** (or creating a new project there)—that matches what Apple and the App Store expect for security and privacy.

**Desktop** apps run with normal file-system access once you choose a folder (e.g., via the system file dialog). The editor can work **in place** on your Git folder, Dropbox path, or USB drive—no extra copy step. The app only keeps a small **recent-projects list** in its own data directory so you can reopen folders quickly.

### How do I fix the bottom bar when using the iPad?
Open **Settings → Keyboard → Disable Shortcuts**. This is an issue of iPadOS when a hardware keyboard is connected that causes the unexpected overflow.