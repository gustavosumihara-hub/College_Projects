import random
lista=[]
for aluno in range(1,5,1):
    x=str(input("Informe o nome de um dos candidatos do sorteio: "))
    lista.append(x)
print("O escolhido é {} ".format(random.choice(lista)))