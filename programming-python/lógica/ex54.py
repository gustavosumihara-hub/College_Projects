maior=[]
menor=[]
for i in range(0,7,1):
    idade=int(input('Informe sua idade: '))
    if idade>=18:
        maior.append(idade)
    else:
        menor.append(idade)
print('O grupo tem {} pessoas maiores de idade e {} menores'.format(len(maior), len(menor)))