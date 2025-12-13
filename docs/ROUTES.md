# Backend API Routes (Base: /api)

## Auth
- POST /auth/login

## Tours
- GET /tours (pagination + minPrice/maxPrice filters)
- POST /tours
- GET /tours/:id
- PUT /tours/:id
- DELETE /tours/:id

## Inquiries
- GET /inquiries (pagination + sorting + status filter)
- POST /inquiries
- PUT /inquiries/:id/status
- DELETE /inquiries/:id

## Ops
- GET /health
- GET /ready

## Docs
- GET /docs (Swagger UI)
