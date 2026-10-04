num=int(input("Informe um numero: "))
print("Informe a opção que deseja converter o numero")
print("[1] Binario\n[2] Hexadecimal\n[3] Octal")
opcao=int(input("Informe a opção: "))
if opcao==1:
    print('{} convertido para binario é igual a {}'.format(num, bin(num)[2:]))
elif opcao==2:
    print('{} convertido para hexadecimal é igual a {}'.format(num, hex(num)[2:]))
elif opcao==3:
    print('{} convertido para octal é igual a {}'.format(num, oct(num)[2:]))
else:
    print('Opção invalida! tente novamente')