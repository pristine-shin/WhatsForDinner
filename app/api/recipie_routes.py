import os
import requests
from flask import Blueprint, jsonify

recipie_routes = Blueprint("recipis", __name__)
SPOONACULAR_API_KEY = os.getenv("API_KEY_SPOONACULAR")

@recipie_routes.route("/recipes/search/<query>")
def get_recipes(query):
    url = f"https://api.spoonacular.com/recipes/complexSearch?query={query}&apiKey={SPOONACULAR_API_KEY}"
    response = requests.get(url)
    return jsonify(response.json())
