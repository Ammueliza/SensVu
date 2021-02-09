# SensVu

**Project Name:** Home Humidity and Temperature Monitoring System

**Project Objective:**

We started this project to effectively manage the humidity of the home and alleviate the dry air during winter months. The basic concept was to monitor the inside and outside temperature and humidity and automatically turn on the humidifier.

**High Level Diagram:**

![](RackMultipart20210209-4-b1sput_html_193825b7482828b5.png)

**Project Description**

**Hardware Layer:**

In this project we installed sensors inside and outside our apartment that pushed the temperature and humidity data to cloud-based IoT platforms such as [Ubidots](https://ubidots.com/) and [ThingSpeak](https://thingspeak.com/).

We used [Arduino](https://store.arduino.cc/usa/arduino-uno-rev3) and [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) as sensor bases which pushed temperature and humidity data that comes from [DHT22](https://learn.adafruit.com/dht?view=all) sensors. Since Arduino does not have built in Wi-Fi connectivity, [ESP8266](https://en.wikipedia.org/wiki/ESP8266) chip was used.

**Middle Layer:**

The reading and sending of the data in Arduino was using the sketch that imported DHT library and send the data via Wi-Fi to predefined endpoint in ThingsSpeak. Similarly, a Python application was used in RaspberryPi base which imported Ubidot&#39;s APIClient library to push the data to Ubidots.

**Presentation Layer:**

The presentation layer is a web app called &#39;SensVu&#39;.

When somebody is pushing different sensor data to different online IOT platforms, the visualization, monitoring and analyzing the data could be difficult because of multiple data sources. The objective of &#39;SensVu&#39; is to provide a user with a unified dashboard and analytics platform where a user can add his provider details and see the data from multiple sources in a single window.

My contribution is heavily focused in this layer. I am doing the development, CICD support and AWS administration of the &#39;SensVu&#39; app.

We are envisaging three iterations of implementation to this project.

| Iteration | Component | Status |
| --- | --- | --- |
| 1 | **SensVu** : HTML5, JavaScript, Axios | Completed |
| 2 | **SensVu** : HTML5, Angular Framework, TypeScript | In Progress |
| 3 | Replace current IOT platforms with AWS Lambda and AWS RDS and make the solution public | To be Done |
| 4 | Replace AWS Lambda with AWS Kinesis | To be Done |

Iteration 1: **SensVu** : HTML5, JavaScript, Axios [Completed]

Iteration 2: **SensVu** : HTML5, Angular Framework, TypeScript [In Progress]

Iteration 3: Replace current IOT platforms with AWS Lambda and AWS RDS and make the solution public. [To be Done]

Iteration4: Replace AWS Lambda with AWS Kinesis [To be Done]

Our motivation behind this project is to:

1. Find solution to an everyday problem
2. Experiment with different technologies and gain first-hand experience
3. Share our solution with others who can get benefited by using it.
