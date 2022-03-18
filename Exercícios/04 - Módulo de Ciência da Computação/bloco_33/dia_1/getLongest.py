def getLongest(names):
    longest = ''
    for name in names:
        if len(name) > len(longest):
            longest = name
    return longest


if __name__ == "__main__":
    print(getLongest(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
