import json


def readJson(file_name):
    with open(file_name) as file:
        data = json.load(file)["results"]
        return data


if __name__ == "__main__":
    file = input("Qual o nome do arquivo? ")
    print(readJson(file))
