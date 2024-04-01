import Adafruit_DHT

import time 

# Set the GPIO pin where the DHT11 sensor is connected

DHT_PIN = 4
DHT_SENSOR = Adafruit_DHT.DHT11


humidity,temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)

def read_temperature_data():
    temperature_data = []  # Initialize an empty list for temperature readings
    

    """
    Reads  temperature from the DHT11 sensor.
    Returns an array of  temperature values.
    """
    i=0
    while i<=5:
        if  temperature is not None:
            temperature_data.append(temperature)
            time.sleep(10)
            i=i+1
        else:
            return None
    return temperature_data
    

def read_humidity_data():
    humidity_data = []  # Initialize an empty list for temperature readings
    

    """
    Reads  humidity data  from the DHT11 sensor.
    Returns an array of  humidity values.
    """
    
    j=0
    while j<=5:
        if  humidity is not None:
            humidity_data.append(humidity)
            time.sleep(10)
            j=j+1
        else:
            return None
    return humidity_data


print("Humidity data is " ,read_humidity_data())

print("Temperature data is " ,read_temperature_data())




    
    
    
    




