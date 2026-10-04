maior=-999
menor=999
for i in range(0,6,1):
    peso=float(input('Informe seu peso: '))
    if peso>maior:
        maior=peso
    if peso<menor:
        menor=peso
print('O maior peso é {}Kg e o menor peso é {}Kg'.format(maior, menor))