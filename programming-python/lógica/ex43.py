print('--==--'*20)
print(' '*50,"Calculo do imc")
print('--==--'*20)
peso=float(input('Informe seu peso em kilo Gramas: '))
altura=float(input('Informe sua altura em metros: '))
imc=peso/altura**2
print('O seu imc é de {:.2f}'.format(imc))
if imc<=18.5:
    print('Abaixo do peso')
elif 18.5<imc<=25:
    print('Você esta no seu peso ideal!!!')
elif 25<imc<=30:
    print('Você está em sobrepeso')
elif 30<imc<=40:
    print('Você está em obesidade')
else:
    print('Você esta em obesidade morbida')
