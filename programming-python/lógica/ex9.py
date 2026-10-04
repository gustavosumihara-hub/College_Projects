
n1=int(input(("Informe o numero que você deseja saber a tabuada: ")))
print("-------------------------")
for i in range(1,11,1):
    print("{} x {:2} {:1} {}".format(n1,i,"=",n1*i))
print("-------------------------")