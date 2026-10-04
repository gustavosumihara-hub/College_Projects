from random import randint

ct=0
print('Pensei em um numero entre 0 e 10 , tente adivinhar')
computador=randint(0,10)
print(computador)
palpite=int(input('Qual o seu palpite: '))
while True:
    ct=ct+1
    if palpite==computador:
        print('Parábens você acertou em {} tentativas'.format(ct))
        break
    if palpite<computador:
        print('O numero é maior, tente outra vez')
    elif palpite>computador:
        print('O numero é menor, tente outra vez')
    else:
        print('Opção invalida')
    palpite = int(input('Qual o seu palpite: '))
