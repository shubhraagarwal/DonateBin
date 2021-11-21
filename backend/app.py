from flask import Flask
from pymongo import MongoClient
import datetime
from flask import request, Response
import json
from pprint import pprint

app = Flask(__name__)
client = MongoClient("mongodb+srv://profile:profile@cluster0.g1gz1.mongodb.net/donor?retryWrites=true&w=majority")


db = client.donor
collection = db.profile

@app.route("/")
def index():
    return "Hello, World!"

# hit "/signup" in your client to create a new profile, it automatically checks if user exists or not from the db, and returns response and status code depending on the response from the db
@app.route("/signup", methods=[ "POST"])
def signup():
    post = json.loads(request.data.decode("utf-8"))
    if (collection.find_one({"email" : post["email"]})):
        print(collection.find({"email" : post["email"]}).limit(1))
        return Response("User Already Exists", status = 400)
    else :
        collection.insert_one(post)
        return Response("User Created", status = 201)
