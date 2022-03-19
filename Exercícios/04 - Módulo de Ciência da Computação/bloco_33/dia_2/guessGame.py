from getRandomPokemon import getRandomPokemon


def startGame():
    pokemon = getRandomPokemon()
    errorTip = ""
    for letter in range(len(pokemon)):
        guess = input("Qual é esse pokemon? ")

        if guess == pokemon:
            print(f"Você acertou esse é o {pokemon}")
            break
        elif letter == len(pokemon) - 3:
            print("Sinto muito, acabou suas tentativas!")
            break
        else:
            errorTip = f"{errorTip}{pokemon[letter]}"
            print(errorTip)


if __name__ == "__main__":
    startGame()
