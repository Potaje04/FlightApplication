import requests
import random


origins = ["Madrid", "London", "Paris", "Roma", "Firenze", "New York", "Istambul", "Berlin"]
airlines = ["Iberia", "Flight Emirates", "British Airlines", "Ryanair"]
def main(): 
    top = 100 
    inf = 0
    random.randint(inf, top)


    for a in range(5000):
        month = random.randint(1,12)
        day = random.randint(1,28)
        if day < 10: 
            day = "0" + str(day)
        if month < 10: 
            month = "0" + str(month)

        date = str(random.randint(2022,2023))+"-"+ str(month) +"-" + str(day)
        r = requests.post('http://localhost:8080/flights/create', json={"origin": "Madrid",
    "destination": origins[random.randint(0, 7)],
    "scales": random.randint(0, 4),
    "luggage": bool(random.getrandbits(1)),
    "airline": airlines[random.randint(0, 3)],
    "date": date,
    "flightNumber": random.randint(10000000, 99999999),
    "transitTimeMinutes": random.randint(45, 600),
    "layoverInMinutes": random.randint(45, 600)
})
    print(r)






if __name__ == "__main__":
    main() 