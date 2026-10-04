
lista=[]
for i in range(0,3,1):
    l1 = float(input('Informe o valor do primeiro lado: '))
    lista.append(l1)
    lista.sort()
if lista[0]+lista[1]>lista[2]:
    print("Esse trinagulo existe ")
else:
    print("Triangulo não existe")