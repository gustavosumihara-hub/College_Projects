from random import randint
from time import sleep
computador=randint(0,5)
print("--=--"*20)
print("Vou pensar em um numero inteiro entre 0 e 5, tente adivinhar!!!")
print("--=--"*20)
numero=int(input("Qual numero eu pensei: "))
print("Processando...")
sleep(2)
if numero==computador:
    print("Parabens você ganhou eu pensei no numero ",computador)
else:
    print("Você perdeu eu pensei no numero {} e não no numero {}".format(computador,numero))