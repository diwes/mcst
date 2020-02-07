import os
import sys
import httplib2
import yaml
import requests


def downloadFile(URL=None):
    h = httplib2.Http(".cache")
    resp, content = h.request(URL, "GET")
    return content


def main(argv):
    output = "None"
    if str.lower(argv[1]) == "init":
        if not os.path.exists("./builds"):
            os.mkdir("./builds")
            output = "maked folder builds"
    if str.lower(argv[1]) == "create":
        stream = open("cores.yaml", "r")
        cores = yaml.load(stream, Loader=yaml.FullLoader)
        print(cores)
        r = requests.get(cores['cores'][argv[2]])
        if r.status_code == 200:
            file = downloadFile(r.json()['direct_link'])
            os.mkdir("./builds/"+argv[3])
            open("./builds/"+argv[3]+"/core.jar", "wb").write(file)
            open("./builds/"+argv[3]+"/start.bat", "w+").write("java -Dfile.encoding=UTF-8 -jar core.jar")
            output = "Created folder " + argv[3] + " in ./builds and downloaded core " + argv[2]
    print("Actions: " + output)


main(sys.argv)
