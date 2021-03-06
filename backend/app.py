from flask import Flask
from pymongo import MongoClient
import datetime
from flask import request, Response
import json
from bson.json_util import loads, dumps
import bson.objectid


app = Flask(__name__)
client = MongoClient("mongodb+srv://profile:profile@cluster0.g1gz1.mongodb.net/donor?retryWrites=true&w=majority")


db = client.donor
collection = db.profile
db1 = client.ngo
collection1 = db1.ngo



def my_handler(x):
    if isinstance(x, datetime.datetime):
        return x.isoformat()
    elif isinstance(x, bson.objectid.ObjectId):
        return str(x)
    else:
        raise TypeError(x)


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
    get_body = request.args
    get_email = get_body["email"]
    get_details = collection.find_one({"email" : get_email})
    if (get_details):
        json_str = dumps(get_details, default=my_handler)
        return Response(json_str, status = 200)  
    return Response("User not found", status=401)

# function to store the donation details
@app.route("/donate", methods=["POST", "GET"])
def donate():
    if(request.method == "POST"):
        post = json.loads(request.data.decode("utf-8"))
        post["donation_date"] = datetime.datetime.now()
        collection.update_one({"email" : post["email"]}, {"$push" : {"donation_details" : post}})
        collection1.insert_one(post)
        return Response("Donation Successful", status = 200)
    elif(request.method == "GET"):
        get_body = request.args
        get_email = get_body["email"]
        get_details = collection.find_one({"email" : get_email})
        if (get_details):
            donation_details = get_details["donation_details"]
            json_str = dumps(donation_details, default=my_handler)
            return Response(json_str, status = 200)  
        return Response("User not found", status=401)

# function to show a list of available donations for the NGO
@app.route("/getDonations", methods=["GET"])
def getDonations():
    get_donations = collection1.find()
    json_str = dumps(get_donations, default=my_handler)
    return Response(json_str, status = 200)

@app.route("/confirm", methods=["POST"])
def confirmDonation():
    post = json.loads(request.data.decode("utf-8"))
    collection1.find_one_and_delete({"uid" : post["uid"]})
    # get array donation_details from collection email
    get_details = collection.find_one({"email" : post["email"], "donation_details.uid" : post["uid"]})

    # function to remove the element from the array using uid
    def remove_element(array, element):
        for i in range(len(array)):
            if array[i]["uid"] == element:
                array.pop(i)
                return array
    newArr = remove_element(get_details["donation_details"], post["uid"])
    collection.update_one({"email" : post["email"]}, {"$set" : {"donation_details" : newArr}})
    # print(newArr)

    

    return Response("Donation Picked Up", status = 200)