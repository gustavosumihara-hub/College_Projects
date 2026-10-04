menor_valor=9999
maior_valor=-9999
for i in range(0,3,1):
    v2=float(input('Informe um valor: '))
    if v2>maior_valor:
        maior_valor=v2
    if v2<menor_valor:
        menor_valor=v2
print("Maior valor é ", maior_valor)
print('Menor valor é:', menor_valor)