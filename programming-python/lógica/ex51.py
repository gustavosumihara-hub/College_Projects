primeiro = int(input('Informe o primeiro termo da PA: '))
razao = int(input('Informe a razão da PA: '))
qnt_termos=int(input('Informe a quantidade de termos da PA: '))
teermo=primeiro+(qnt_termos-1)*razao
for i in range(primeiro-razao,teermo,razao):
    print('{}'.format(i+razao),end="-->")
print('Acabou')