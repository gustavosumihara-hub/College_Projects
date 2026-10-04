emprestimo=float(input('Qual o valor do emprestimo: '))
salario=float(input('Qual o seu salario: '))
tempo=float(input('Quantos anos pretende pagar: '))
print('Para pegar um empestimo de {} R$ em {:.0f} anos a prestação será de {:.2f} R$ '.format(emprestimo, tempo,emprestimo/(tempo*12) ))
if ((salario/100)*30)<emprestimo/(tempo*12):
    print('Emprestimo negado')
else:
    print('Emprestimo aceito!!!')