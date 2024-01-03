import sys

lines = open(sys.argv[1]).read().splitlines()

p1 = 0
p2 = 0
for line in lines:
    a = []
    b = []
    for i, c in enumerate(line):
        if c.isdigit():
            a.append(c)
            b.append(c)
        else:
            for k, num in enumerate(['one','two','three','four','five','six','seven','eight','nine']):
                if line[i:].startswith(num):
                    b.append(str(k + 1))
    if len(a):
        p1 += int(a[0]+a[-1])
    if len(b):
        p2 += int(b[0]+b[-1])


print(p1)
print(p2)