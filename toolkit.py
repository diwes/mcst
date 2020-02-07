import os
import sys
import requests

from yaml import load, dump


def main(argv):
    output = "None"
    if str.lower(argv[1]) == "init":
        if not os.path.exists("./builds"):
            os.mkdir("./builds")
            output = "maked folder builds"
    if str.lower(argv[1]) == "create":

    print("Actions: " + output)


main(sys.argv)
