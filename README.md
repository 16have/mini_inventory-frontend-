# Mini Inventory Frontend

## Local setup

1. Copy `.env.example` to `.env`.
2. Set `VITE_API_BASE_URL` to the backend API base URL, including `/api`.
3. Run `npm install` and `npm run dev`.

## Deploy to Render

This repository includes `render.yaml`, which creates a Render Static Site. It
builds the React app and rewrites all routes to `index.html` so React Router
works on direct visits to `/dashboard` and `/inventory`.

Create the backend service and database first. Then create a Blueprint from
this repository in Render. When prompted for `VITE_API_BASE_URL`, enter the
backend's public URL with `/api`, for example:

`https://mini-inventory-api.onrender.com/api`

`VITE_` variables are compiled into the frontend build, so do not put secrets
in this variable. The backend must allow CORS requests from the frontend's
`https://*.onrender.com` URL (or the exact deployed frontend URL).
