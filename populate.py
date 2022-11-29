import requests
import random


origins = ["Madrid", "London", "Paris", "Roma", "Firenze", "New York", "Istambul", "Berlin"]
airlines = ["Iberia", "Flight Emirates", "British Airlines", "Ryanair"]
def main(): 
    top = 100 
    inf = 0
    random.randint(inf, top)


    for a in range(10):

        r = requests.post('http://localhost:8080/flights/create', json={"origin": "Madrid",
    "destination": origins[random.randint(0, 7)],
    "scales": random.randint(0, 4),
    "luggage": bool(random.getrandbits(1)),
    "airline": airlines[random.randint(0, 3)],
    "date": "2023-"+ str(random.randint(1,12)) +"-" + str(random.randint(1,28)),
    "flightNumber": random.randint(10000000, 99999999),
    "transitTime": (random.randint(1, 5) + random.randint(1, 9)/10),
    "layover": bool(random.getrandbits(1)),
})
    print(r)






if __name__ == "__main__":
    main() 