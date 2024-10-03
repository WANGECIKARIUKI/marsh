from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random
import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dashboard.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Sample Data Models
class WebsiteData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    date = db.Column(db.String(100))
    value = db.Column(db.Integer)

class MessagingData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    date = db.Column(db.String(100))
    value = db.Column(db.Integer)

class CallingData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    date = db.Column(db.String(100))
    value = db.Column(db.Integer)

# Initialize the database
@app.before_first_request
def create_tables():
    db.create_all()

# Example data insertion (useful for testing)
@app.route('/add_sample_data', methods=['POST'])
def add_sample_data():
    sample_websites = [
        WebsiteData(name='Google', date='2024-09-01', value=random.randint(1, 5)),
        WebsiteData(name='Facebook', date='2024-09-01', value=random.randint(1, 5)),
    ]
    sample_messaging = [
        MessagingData(name='Alice', date='2024-09-01', value=random.randint(1, 5)),
        MessagingData(name='Bob', date='2024-09-01', value=random.randint(1, 5)),
    ]
    db.session.bulk_save_objects(sample_websites + sample_messaging)
    db.session.commit()
    return jsonify({'message': 'Sample data added!'}), 201

# Fetch website data
@app.route('/api/website_data', methods=['GET'])
def get_website_data():
    data = WebsiteData.query.all()
    return jsonify([{ 'name': website.name, 'date': website.date, 'value': website.value } for website in data])

# Fetch messaging data
@app.route('/api/messaging_data', methods=['GET'])
def get_messaging_data():
    data = MessagingData.query.all()
    return jsonify([{ 'name': msg.name, 'date': msg.date, 'value': msg.value } for msg in data])

# Fetch calling data
@app.route('/api/calling_data', methods=['GET'])
def get_calling_data():
    data = CallingData.query.all()
    return jsonify([{ 'name': call.name, 'date': call.date, 'value': call.value } for call in data])

# Fetch last known locations (for example purpose)
@app.route('/api/last_locations', methods=['GET'])
def get_last_locations():
    # You can create a model for this as well
    return jsonify([
        { "id": 1, "name": "316 N Washington St, Watertown, WI, 54801 - Apr 9, 2020 6:59 PM", "coordinates": [43.1951, -88.7306] },
        { "id": 2, "name": "134 Coolidge Ave, Watertown, WI, 54801 - Apr 8, 2020 6:49 PM", "coordinates": [43.1975, -88.7323] }
    ])

if __name__ == '__main__':
    app.run(debug=True)
