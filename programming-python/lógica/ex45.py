from time import sleep
from random import choice
lista=[0,1,2]
sorteado=choice(lista)
print('Sua opção: ')
print('[0]pedra')
print('[1]papel')
print('[2]tesoura')
jogada=int(input('Qual a sua jogada: '))
print('Pedra')
sleep(1)
print('Papel')
sleep(1)
print('Tesoura')
sleep(2)
if jogada==0 and sorteado==1:
    print('Eu ganhei ')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
elif jogada==1 and sorteado==2:
    print('Eu ganhei')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
elif jogada==2 and sorteado==0:
    print('Eu ganhei')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
elif jogada==0 and sorteado==2:
    print('Você venceu')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
elif jogada==1 and sorteado==0:
    print('Você venceu ')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
elif jogada==2 and sorteado==1:
    print('Você venceu')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')
else:
    print('empatamos')
    if sorteado == 0:
        print('pois Eu escolhi pedra')
    elif sorteado == 1:
        print('pois Eu escolhi papel')
    else:
        print('pois Eu escolhi tesoura')