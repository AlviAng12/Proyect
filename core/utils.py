from guard_api import settings
import re

def is_valid_phone_number(phone_number):
    regex = r"^\+[0-9]{1,4}(\s?[\-\/\.\(\)]?\s?[0-9]{2,}){1,}$"
    return re.match(regex, phone_number) is not None


