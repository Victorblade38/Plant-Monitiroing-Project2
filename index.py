from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
app.debug = True
CORS(app)

def generate_random_numbers(min_value, max_value, count):
    return [round(random.uniform(min_value, max_value), 2) for _ in range(count)]

def generate_sensor_data():
    temperature = generate_random_numbers(0, 100, 5)
    humidity = generate_random_numbers(0, 100, 5)
    moisture = generate_random_numbers(0, 100, 5)
    return [temperature, humidity, moisture]

@app.route('/sensor_data', methods=['GET'])
def get_sensor_data():
    data = generate_sensor_data()
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
