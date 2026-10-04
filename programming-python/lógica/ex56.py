nome1=[]
idade1=[]
sexo1=[]
maior_nome=[]
maximo=-999
mulheres20=[]
for i in range(1,5,1):
    print('--=--'*20)
    print('{}° Pessoa'.format(i))
    print('--=--'*20)
    idade=int(input('Idade:'))
    sexo=str(input('sexo[m/f]'))
    nome=str(input('Nome:'))
    if sexo=='m' and idade>maximo:
        maximo=idade
        maior_nome.append(nome)
    else:
        print('Não tem nem um homem no grupo')
        #maior_nome.pop(0)
    nome1.append(nome)
    idade1.append(idade)
    sexo1.append(sexo)
    if sexo=='f' and idade<20:
        mulheres20.append(idade)


media=sum(idade1)/4
print('A média das idades é ', media)
print('O homem mais velho tem {} e se chama {}'.format(maximo,maior_nome[len(maior_nome)-1]))
print('tem {} mulheres com menos de 20 anos '.format(len(mulheres20)))
