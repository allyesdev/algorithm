import sys

str = sys.stdin.readline()
splitted_str = str.split(" ")

count = 0
for word in splitted_str:
    if word and word != " " and word != "\n":
        count += 1

print(count)
