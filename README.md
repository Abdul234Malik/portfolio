# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Portfolio chatbot

A small optional chatbot answers questions about Adeboye Abdul-Malik. It is closed by default (floating button bottom-right) and does not auto-open.

- **Frontend:** `src/components/Chatbot.jsx` – floating button and chat panel (matches site design).
- **Backend:** FastAPI in `backend/`. **Edit `backend/prompts.py`:**
  - `SYSTEM_PROMPT` – instructions for the assistant (answer only from knowledge, stay in scope, be concise).
  - `PORTFOLIO_KNOWLEDGE` – your own facts about Adeboye (no invented info).

**Run the backend:**
```bash
cd backend
pip install -r requirements.txt
# Set your OpenAI key (e.g. in .env or set OPENAI_API_KEY=sk-... on Windows)
python -m uvicorn main:app --reload --port 8000
```
(Use `python -m uvicorn` so it works even when `uvicorn` isn’t on your PATH, e.g. on Windows.)

**Run the frontend:** `npm run dev` (defaults to `http://localhost:8000/api/chat` for the chatbot). For production, set `VITE_CHAT_API_URL` to your deployed backend URL. Do not put API keys in the frontend.

---

## Deploy to Vercel (frontend)

1. Push the repo to GitHub.
2. In [Vercel](https://vercel.com), import the GitHub repo. Use the **root** of the repo (where `package.json` and `vercel.json` are).
3. Vercel will detect Vite: build command `npm run build`, output `dist`. Deploy.
4. **Chatbot in production:** The chatbot needs your FastAPI backend. Deploy the `backend/` folder elsewhere (e.g. [Railway](https://railway.app), [Render](https://render.com), or a VPS). Then in Vercel → Project → **Settings → Environment Variables**, add:
   - `VITE_CHAT_API_URL` = `https://your-backend-url.com/api/chat`  
   Redeploy so the new env is baked into the build. Do not put `OPENAI_API_KEY` in Vercel; that stays on the backend only.

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
