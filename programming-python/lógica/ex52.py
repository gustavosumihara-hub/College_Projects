n1=int(input('Digite um numero: '))
lista=[]

for i in range(1,n1+1,1):
    if n1%i==0:
       lista.append(i)
if len(lista)==2:
    print('{} é um numero primo pois seus unicos divisores é {}'.format(n1,lista))
elif len(lista)>2:
    print('{} é um numero divisivel por {} '.format(n1,lista))
else:
    print('Você digitou 0 ou 1; zero não é divisivel e 1 é primo pois é divisivel somente por e ele mesmo que é o proprio 1')