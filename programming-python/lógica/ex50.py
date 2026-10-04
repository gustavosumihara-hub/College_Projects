somador=0
ct=0
for i in range(0,6,1):
    numeros=int(input('Informe um numero: '))
    if numeros%2==0:
        somador=somador+numeros
        ct=ct+1
print('A soma dos se {} numeros digitados é igual a {}'.format(ct,somador))
