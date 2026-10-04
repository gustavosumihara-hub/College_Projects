valor=float(input('Informe o valor total da sua compra: '))
print('[Opção numero 01 = A vista no dinheiro]')
print('[Opção numero 02 = A vista no cartão  ]')
print('[Opção numero 03 = No cartão ate 2x   ]')
print('[Opção numero 04 = No cartão até 3x   ]')
opcao=int(input('Informe uma opção: '))
if opcao==1:
    print("O valor da sua compra ficara de {}R$ por {}R$".format(valor, valor-(valor/10)))
elif opcao==2:
    print("O valor da sua compra ficara de {}R$ por {}R$".format(valor, valor-(valor/100)*5))
elif opcao==3:
    parcela=int(input('Informe a quantidades de parcelas: '))
    if  parcela==2:
        print("O valor da sua compra ficara de {} R$ e cada parcela será de {}R$".format(valor,valor/2))
    else:
        print("Você selecionou um numero de parcelas incompatil com aprimeira opção")
elif opcao==4:
    parcela = int(input('Informe a quantidades de parcelas: '))
    if parcela>=3:
        print("O valor da sua compra ficara de {} por {} e cada parcela será de {}R$".format(valor, valor+(valor/100)*20,(valor+(valor/100)*20)/parcela))
    else:
        print("Você selecionou um numero de parcelas incompatil com aprimeira opção")