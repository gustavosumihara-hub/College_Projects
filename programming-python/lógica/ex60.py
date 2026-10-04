n1=int(input('Informe um numero para calcular o seu fatorial: '))
f=1
for i in range(n1+1,1,-1):
        f=(f*(i-1))
print('O fatorial de {} é {} '.format(n1, f,))