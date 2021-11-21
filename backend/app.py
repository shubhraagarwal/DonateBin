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
        return Response("User Already Exists", status = 400)
    else :
        collection.insert_one(post)
        return Response("User Created", status = 201)

# function to check if user is donor or NGO
@app.route("/getInfo", methods=["GET"])
def getInfo():
    get_body = json.loads(request.data.decode("utf-8"))
    get_email = get_body["email"]
    get_details = collection.find_one({"email" : get_email})
    if (get_details):
        return Response(get_details["type"], status = 200)   
    return Response("User not found", status=401)
