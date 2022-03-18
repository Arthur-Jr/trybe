def getLowest(numbers):
    lowest = numbers[0]
    for number in numbers:
        if number < lowest:
            lowest = number
    return lowest


if __name__ == "__main__":
    print(getLowest([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
