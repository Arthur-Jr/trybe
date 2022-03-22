def return_number_list(end_number):
    numbers_array = range(1, end_number + 1)
    result = []
    for number in numbers_array:
        if number % 3 == 0 and number % 5 == 0:
            result.append('FizzBuzz')
        elif number % 3 == 0:
            result.append('Fizz')
        elif number % 5 == 0:
            result.append('Buzz')
        else:
            result.append(number)
    return result


def get_number_by_text(text):
    if len(text) < 1:
        raise ValueError("Texto Inválido")

    text_uppercase = text.upper()
    index = 0
    result = ""

    while index < len(text):
        if text_uppercase[index] in "ABC":
            result += "2"
        elif text_uppercase[index] in "DEF":
            result += "3"
        elif text_uppercase[index] in "GHI":
            result += "4"
        elif text_uppercase[index] in "JKL":
            result += "5"
        elif text_uppercase[index] in "MNO":
            result += "6"
        elif text_uppercase[index] in "PQRS":
            result += "7"
        elif text_uppercase[index] in "TUV":
            result += "8"
        elif text_uppercase[index] in "WXYZ":
            result += "9"
        elif text_uppercase[index] in "-01":
            result += text_uppercase[index]

        index += 1

    return result
