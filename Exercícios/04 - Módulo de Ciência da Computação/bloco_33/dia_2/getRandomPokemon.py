import random
from readJson import readJson


def getRandomPokemon():
    pokemon = random.choice(readJson("pokemon.json"))
    return pokemon["name"]


if __name__ == "__main__":
    print(getRandomPokemon())
