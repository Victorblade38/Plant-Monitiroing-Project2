from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
app.debug = True
CORS(app)


def read_temperature_data():
    return [round(random.uniform(34, 36), 2) for _ in range(5)]

def read_humditiy_data():
    return [round(random.uniform(50, 56), 2) for _ in range(5)]

def read_moisture_data():
    return [round(random.uniform(0, 1), 2) for _ in range(5)]

def generate_sensor_data():
    temperature = read_temperature_data()
    humidity = read_humditiy_data()
    moisture = read_moisture_data()
    return [temperature, humidity, moisture]

@app.route('/sensor_data', methods=['GET'])
def get_sensor_data():
    data = generate_sensor_data()
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
