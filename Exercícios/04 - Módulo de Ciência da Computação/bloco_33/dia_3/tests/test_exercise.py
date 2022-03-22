from exercise import return_number_list, get_number_by_text
import pytest


@pytest.fixture
def expect_result():
    return [1, 2, 'Fizz', 4, 'Buzz']


def test_return_number_list_success_case(expect_result):
    assert return_number_list(5) == expect_result


def test_return_number_list_when_pass_a_string():
    with pytest.raises(TypeError):
        return_number_list('5')


# get_number_by_text tests:

def test_get_number_by_text_when_pass_a_empty_string():
    with pytest.raises(ValueError, match="Texto Inválido"):
        get_number_by_text("")


def test_get_number_by_text_ABC_tests():
    assert get_number_by_text("ABC") == "222"


def test_get_number_by_text_DEF_tests():
    assert get_number_by_text("DEF") == "333"


def test_get_number_by_text_01_tests():
    assert get_number_by_text("0-111-110") == "0-111-110"


def test_get_number_by_text_success_case():
    assert get_number_by_text("MY-MISERABLE-JOB") == "69-647372253-562"
