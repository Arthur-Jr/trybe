def gaussSum(number):
    sumResult = 0
    for num in range(1, number + 1):
        sumResult += num
    return sumResult


if __name__ == "__main__":
    print(gaussSum(5))
