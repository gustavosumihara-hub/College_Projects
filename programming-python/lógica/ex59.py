from time import sleep
n1=float(input('primeiro valor: '))
n2=float(input('segundo valor: '))
while True:
    sleep(1)
    print('[1]Somar')
    print('[2]multiplicar')
    print('[3]maior')
    print('[4]Novo numero')
    print('[5]Sair do programa')
    opcao=int(input('Qual a sua opção: '))
    if opcao==5:
        break
    if opcao==1:
        print('A soma de {} + {} é {}'.format(n1,n2,n1+n2))
    elif opcao==2:
        print('A multiplicação de {} x {} é {}'.format(n1, n2, n1 * n2))
    elif opcao==3:
        if n1>n2:
            print('{} é maior que {}'.format(n1,n2))
        elif n2>n1:
            print('{} é maior que {}'.format(n2,n1))
        else:
            print('{} e {} são iguais'.format(n1,n2))
    elif opcao==4:
        n1 = float(input('primeiro valor: '))
        n2 = float(input('segundo valor: '))

