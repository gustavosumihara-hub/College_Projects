import random
lista=[]
for x in range(1,5,1):
    Y=str(input("Informe o nome do aluno: "))
    lista.append(Y)
random.shuffle(lista)
print("A ordem será: ", lista)