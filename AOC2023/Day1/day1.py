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
        for k, num in enumerate(['one','two','three','four','five','six','seven','eight','nine']):
            if c[i:].startswith(num):
                b.append(str(k))
            
    p1 += int(a[0]+a[-1])
    print(b)

print(p1)