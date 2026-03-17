#  Match Mic — Live Sports Streaming Backend

A scalable real-time backend system for live sports tracking, enabling instant score updates and play-by-play commentary using WebSockets and REST APIs.

---

##  Overview

**Match Mic** simulates a live sports broadcasting platform where clients can:

- View ongoing matches
- Receive real-time commentary updates
- Dynamically subscribe/unsubscribe using WebSockets

Built with a focus on **low-latency communication**, **data consistency**, and **scalable architecture**.

---

##  Tech Stack

- Backend: Node.js, Express  
- Realtime: WebSockets (ws)  
- Database: PostgreSQL  
- ORM: Drizzle ORM  
- Validation: Zod  

---

##  Key Features

- Real-Time Updates (WebSockets)
- Dynamic Subscriptions
- Heartbeats, Rate Limiting, Backpressure Handling
- Strict Data Validation (Zod)
- Scalable Data Layer (PostgreSQL)
- Simulation Support (Seed Scripts)

---

##  API Endpoints

### Matches
- GET /matches  
- POST /matches  

### Commentary
- GET /matches/:id/commentary  
- POST /matches/:id/commentary  

---

##  WebSocket Protocol

Connect: ws://localhost:3000/ws

Supported Events:
- subscribe / unsubscribe
- setSubscriptions
- commentary (real-time push)
- ping/pong

---


##  Learnings

- Built a real-time event streaming system using WebSockets  
- Learned scaling and performance optimization techniques  
- Implemented production-grade safeguards like rate limiting and backpressure control  

