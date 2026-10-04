print('Gerador de PA')
print('==--==' * 20)

n1 = int(input('Informe o primeiro termo: '))
r = int(input('Qual é a razão: '))
ctw=1
termo=n1
print(termo, end='-->')
while ctw<10:
    termo=termo+r
    ctw=ctw+1
    print('{}'.format(termo),end='-->')
print('fim')
while True:
    amais=int(input('\nQuantos termos a mais: '))
    if amais==0:
        break
    while ctw<10+amais:
        termo = termo + r
        ctw = ctw + 1
        print('{}'.format(termo), end='-->')
print('fim')
