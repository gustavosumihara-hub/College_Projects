from datetime import datetime
ano_atual=datetime.now().year
nascimento=int(input('Informe seu ano de nascimento: '))
print('Quem naceu no de {} tem {} anos em {} portanto:'.format(nascimento,ano_atual-nascimento,ano_atual))
if ano_atual-nascimento<18:
    print('Faltam {} ano para você se alistar: '.format(18-(ano_atual-nascimento)))
elif ano_atual-nascimento>18:
    print('Você deveria  ter se alistado a {} anos atras'.format((ano_atual-nascimento)-18))
else:
    print("Vc deve se alistar esse ano")