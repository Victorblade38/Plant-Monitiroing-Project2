import Adafruit_DHT
import time 
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.debug = True
CORS(app)

# Set the GPIO pin where the DHT11 sensor is connected
DHT_PIN = 4
DHT_SENSOR = Adafruit_DHT.DHT11

def read_temperature_data():
    temperature_data = []
    i = 0
    while i <= 5:
        temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)[1]
        if temperature is not None:
            temperature_data.append(temperature)
            time.sleep(10)
            i += 1
        else:
            return None
    return temperature_data

def read_humidity_data():
    humidity_data = []
    j = 0
    while j <= 5:
        humidity = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)[0]
        if humidity is not None:
            humidity_data.append(humidity)
            time.sleep(10)
            j += 1
        else:
            return None
    return humidity_data

@app.route('/sensor_data', methods=['GET'])
def get_sensor_data():
    temperature = read_temperature_data()
    humidity = read_humidity_data()
    data = {"temperature": temperature, "humidity": humidity}
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
