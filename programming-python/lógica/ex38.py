n1=float(input("Inforeme um numero: "))
n2=float(input('Informe outro numero: '))
if n1>n2 and n2<n1:
    print('Primeiro valor é maior')
elif n1<n2 and n2>n1:
    print('Segundo valor é maior: ')
else:
    print('Valores são iguais')