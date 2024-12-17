from fastapi import FastAPI, Depends
from app.auth import authenticate_user
from app.apis import tweets, chat, apollo
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


# # Add routes
app.include_router(tweets.router, prefix="/api/tweets", dependencies=[Depends(authenticate_user)])
app.include_router(chat.router, prefix="/api/chat", dependencies=[Depends(authenticate_user)])
app.include_router(apollo.router, prefix="/api/apollo", dependencies=[Depends(authenticate_user)])

@app.get("/")
def root():
    return {"name": "simulation", "version": "0.0.1"}
