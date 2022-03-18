def getAverage(numbers):
    result = 0
    for number in numbers:
        result += number
    return result / len(numbers)


if __name__ == "__main__":
    print(getAverage([5, 6, 7, 8]))
